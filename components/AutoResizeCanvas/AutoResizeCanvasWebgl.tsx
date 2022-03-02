import React, { MutableRefObject, useEffect, useRef, useState } from "react";

type Props = {
  onRender?: (
    canvas: HTMLCanvasElement,
    gl: WebGLRenderingContext,
    delta: number
  ) => void;
  onInit?: (
    canvas: HTMLCanvasElement,
    gl: WebGLRenderingContext
  ) => Promise<any>;
  onResize?: (width: number, height: number) => void;
};

function AutoResizeCanvasWebgl({ onRender, onInit, onResize }: Props) {
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;
  const [canvasSize, setCanvasSize] = useState({ width: 300, height: 300 });
  const gl = useRef() as MutableRefObject<WebGLRenderingContext>;
  const [hasInit, setHasInit] = useState(false);

  // context and loop
  useEffect(() => {
    // setup canvas
    gl.current = canvasRef.current.getContext("webgl") as WebGLRenderingContext;
    gl.current.viewport(0, 0, window.innerWidth, window.innerHeight);

    async function init() {
      // init
      onInit && (await onInit(canvasRef.current, gl.current));
      setHasInit(true);

      let lastFrameTime = 0;
      function updateFrame(currentFrameTime: number) {
        const delta = currentFrameTime - lastFrameTime;
        lastFrameTime = currentFrameTime;

        onRender && onRender(canvasRef.current, gl.current, delta);
        requestAnimationFrame(updateFrame);
      }
      requestAnimationFrame(updateFrame);
    }
    init();
  }, []);

  useEffect(() => {
    if (!hasInit) return;

    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // handle window resize
      setCanvasSize({
        width: width,
        height: height,
      });

      gl.current.viewport(0, 0, width, height);

      onResize && onResize(width, height);
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [hasInit]);

  return (
    <canvas
      className="w-full h-full"
      ref={canvasRef}
      width={canvasSize.width}
      height={canvasSize.height}
    />
  );
}

export default AutoResizeCanvasWebgl;