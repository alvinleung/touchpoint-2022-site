import React, { MutableRefObject, useEffect, useRef, useState } from "react";

type Props = {
  onRender?: (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    delta: number
  ) => void;
  onInit?: (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
  ) => void;
  onResize?: (width: number, height: number) => void;
};

function AutoResizeCanvas({ onRender, onInit, onResize }: Props) {
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;
  const [canvasSize, setCanvasSize] = useState({ width: 300, height: 300 });
  const context = useRef() as MutableRefObject<CanvasRenderingContext2D>;

  // context and loop
  useEffect(() => {
    // setup canvas
    context.current = canvasRef.current.getContext(
      "2d"
    ) as CanvasRenderingContext2D;

    // init
    onInit && onInit(canvasRef.current, context.current);

    let previousFrameTime = 0;
    function updateFrame(currentFrameTime: number) {
      const delta = (currentFrameTime - previousFrameTime) / 1000;
      previousFrameTime = currentFrameTime;

      onRender && onRender(canvasRef.current, context.current, delta);
      requestAnimationFrame(updateFrame);
    }
    requestAnimationFrame(updateFrame);
  }, []);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // handle window resize
      setCanvasSize({
        width: width,
        height: height,
      });

      onResize && onResize(width, height);
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      width={canvasSize.width}
      height={canvasSize.height}
    />
  );
}

export default AutoResizeCanvas;
