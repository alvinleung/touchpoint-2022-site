import React, { useEffect, useRef, useContext } from "react";
import { Vec2 } from "curtainsjs";
import * as twgl from "twgl.js";

//@ts-ignore
import CHECKER_FRAG from "./CheckerEffectGL.frag";
//@ts-ignore
import CHECKER_VERT from "./CheckerEffectGL.vert";

import AutoResizeCanvasWebgl from "../AutoResizeCanvas/AutoResizeCanvasWebgl";

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const CheckerContext = React.createContext(null);

export const useCheckerContext = () => useContext(CheckerContext);

export function LandingEffect({ children }) {
  const mousePos = useRef(new Vec2(0, 0));
  const noiseOffset = useRef({ x: 0, y: 0 });

  // for webgl
  const programInfoRef = useRef<twgl.ProgramInfo>();
  const bufferInfoRef = useRef<twgl.BufferInfo>();

  const init = async (canvas: HTMLCanvasElement, gl: WebGLRenderingContext) => {
    // init webgl
    const program = twgl.createProgramFromSources(gl, [
      CHECKER_VERT,
      CHECKER_FRAG,
    ]);
    programInfoRef.current = twgl.createProgramInfoFromProgram(gl, program);

    const arrays = {
      a_position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
    };
    bufferInfoRef.current = twgl.createBufferInfoFromArrays(gl, arrays);
  };

  const render = (
    canvas: HTMLCanvasElement,
    gl: WebGLRenderingContext,
    delta: number
  ) => {
    const screenWidth = canvas.width;
    const screenHeight = canvas.height;
    const noiseXVel = -(mousePos.current.x / screenWidth - 0.5) * 0.05;
    const noiseYVel = (mousePos.current.y / screenHeight - 0.5) * 0.05;
    noiseOffset.current.y += delta * 0.001 + clamp(noiseYVel, -0.7, 0.4);
    noiseOffset.current.x += noiseXVel;

    const uniforms = {
      uResolution: [canvas.width, canvas.height],
      uMouse: [mousePos.current.x, mousePos.current.y],
      uNoiseOffset: [noiseOffset.current.x, noiseOffset.current.y],
      uCheckerSize: 10,
    };

    const programInfo = programInfoRef.current;
    const bufferInfo = bufferInfoRef.current;

    gl.useProgram(programInfo.program);
    twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
    twgl.setUniforms(programInfo, uniforms);
    twgl.drawBufferInfo(gl, bufferInfo);
  };

  const resize = (width: number, height: number) => {};

  useEffect(() => {
    function handleMouseMove(e) {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-screen flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
        <AutoResizeCanvasWebgl
          onRender={render}
          onInit={init}
          onResize={resize}
        />
      </div>
      {children}
    </div>
  );

  // return (
  //   <Plane
  //     // plane init parameters
  //     vertexShader={MouseCheckerShaderVert}
  //     fragmentShader={MouseCheckerShaderFrag}
  //     uniforms={checkerUniforms.current}
  //     // plane events
  //     onRender={onRender}
  //     transparent={true}
  //     renderOrder={0}
  //   >
  //     <div ref={planeMeasurementRef} className="w-full h-screen flex flex-col">
  //       <CheckerContext.Provider
  //         value={{
  //           uniforms: checkerUniforms,
  //           mousePos: mousePos,
  //           showGlobalCursor: showGlobalCursor,
  //         }}
  //       >
  //         {children}
  //       </CheckerContext.Provider>
  //     </div>
  //   </Plane>
  // );
}
