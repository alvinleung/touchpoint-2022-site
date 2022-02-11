import React, { useEffect, useRef } from "react";
import * as twgl from "twgl.js";
//@ts-ignore
import OVERLAY_FRAG from "./Overlay.frag";
//@ts-ignore
import OVERLAY_VERT from "./Overlay.vert";

interface Props {
  children?: React.ReactNode;
}

const { m4 } = twgl;

export const EffectOverlay = ({ children }: Props) => {
  const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>;
  const mousePos = useRef({ x: 0, y: 0 });

  const pixelRatio = React.useMemo(() => {
    if (typeof window !== "undefined")
      return Math.min(1.5, window.devicePixelRatio);
    return 1;
  }, []);

  // update logic and draw
  useEffect(() => {
    // setup the canvas here
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // console.log(OVERLAY_FRAG);
    // console.log(OVERLAY_VERT);

    const gl = canvas.getContext("webgl") as WebGLRenderingContext;
    const program = twgl.createProgramFromSources(gl, [
      OVERLAY_VERT,
      OVERLAY_FRAG,
    ]);
    const programInfo = twgl.createProgramInfoFromProgram(gl, program);

    const arrays = {
      aPosition: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
    };
    const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

    function update(time: number) {
      // update the logic here
    }

    function render(time: number) {
      twgl.resizeCanvasToDisplaySize(gl.canvas);
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

      const uniforms = {
        uTime: time * 0.001,
        uResolution: [gl.canvas.width, gl.canvas.height],
        uMouse: [mousePos.current.x, mousePos.current.y],
        uMatrix: m4.translation([-1, -1, 0]),
      };

      gl.useProgram(programInfo.program);
      twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
      twgl.setUniforms(programInfo, uniforms);
      twgl.drawBufferInfo(gl, bufferInfo);
    }

    function nextFrame(time: number) {
      update(time);
      render(time);
      requestAnimationFrame(nextFrame);
    }
    requestAnimationFrame(nextFrame);
  }, []);

  // update mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="fixed h-full w-full" />
      {children}
    </>
  );
};
