import { b2World } from "@box2d/core";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import AutoResizeCanvas from "./AutoResizeCanvas";
import {
  initPhysicsSimulation,
  updatePhysicsSimulation,
  updateWallPositions,
} from "./PhysicsSimulation";
import { getWorldSizeInfo, WorldSizeInfo } from "./PhysicsSimulationUtils";

type Props = {};

function FloatingCard({}: Props) {
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const worldRef = useRef() as MutableRefObject<b2World>;
  const worldObjectsRef = useRef() as MutableRefObject<any>;

  const mouseInputPos = useRef({ x: 0, y: 0 });
  const isMouseDown = useRef(false);

  const handleMouseUp = (e: React.MouseEvent) => {
    isMouseDown.current = false;
  };
  const handleMouseDown = (e: React.MouseEvent) => {
    isMouseDown.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseInputPos.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  const screenToWorldPos = (wordSizeInfo: WorldSizeInfo, { x = 0, y = 0 }) => {
    const bounds = containerRef.current.getBoundingClientRect();
    const xRatio = (x - bounds.left + window.scrollX) / bounds.width;
    const yRatio = (y - bounds.top + window.scrollY) / bounds.height;

    const scaledWorldSize = wordSizeInfo.scaled;

    return {
      x: (xRatio - 0.5) * scaledWorldSize.width,
      y: (yRatio - 1) * -scaledWorldSize.height, // remember y is flipped
    };
  };

  const onInit = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
  ) => {
    const initialWorldSizeInfo = getWorldSizeInfo(
      window.innerWidth,
      window.innerHeight
    );
    const [word, worldObjects] = initPhysicsSimulation({
      worldSizeInfo: initialWorldSizeInfo,
    });
    worldObjectsRef.current = worldObjects;
    worldRef.current = word;
  };

  const onRender = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    delta: number
  ) => {
    const worldSizeInfo = getWorldSizeInfo(canvas.width, canvas.height);
    const mouseWorldPos = screenToWorldPos(
      worldSizeInfo,
      mouseInputPos.current
    );

    updatePhysicsSimulation({
      canvas: canvas,
      context: context,
      delta: delta,
      mouseWorldPos: mouseWorldPos,
      isMouseDown: isMouseDown.current,
      world: worldRef.current,
      worldObjects: worldObjectsRef.current,
    });
  };

  const onResize = (width: number, height: number) => {
    updateWallPositions(
      worldObjectsRef.current,
      getWorldSizeInfo(width, height)
    );
  };

  // add accelerometer
  useEffect(() => {
    function handleOrientation(event) {
      var beta = event.beta; // In degree in the range [-180,180)
      var gamma = event.gamma; // In degree in the range [-90,90)

      // Because we don't want to have the device upside down
      // We constrain the x value to the range [-90,90]
      if (beta > 90) {
        beta = 90;
      }
      if (beta < -90) {
        beta = -90;
      }

      const maxGravityX = 200;
      const maxGravityY = 200;
      console.log(beta);

      worldRef.current.SetGravity({
        x: (gamma / 90) * maxGravityX,
        y: -(beta / 90) * maxGravityY,
      });
    }

    window.addEventListener("deviceorientation", handleOrientation);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <AutoResizeCanvas
        onRender={onRender}
        onInit={onInit}
        onResize={onResize}
      />
    </div>
  );
}

export default FloatingCard;
