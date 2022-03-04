import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { AnimationConfig } from "../AnimationConfig";
import useMeasureElement from "../../hooks/useMeasureElement";

type Props = { children: React.ReactNode };
const InfoBar = ({ children }: Props) => {
  const [measurement, ref] = useMeasureElement<HTMLDivElement>([]);
  const [containerMeasurement, containerRef] =
    useMeasureElement<HTMLDivElement>([]);

  console.log(measurement && containerMeasurement.width * 0.014);

  const control = useAnimation();
  useEffect(() => {
    control.stop();
    control.set({ x: containerMeasurement && containerMeasurement.width });
    control.start({
      x: measurement && -measurement.width,
      transition: {
        duration: containerMeasurement && containerMeasurement.width * 0.014,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [measurement, containerMeasurement]);

  return (
    <motion.div
      className="fixed bottom-0 text-tiny bg-accent-red border-t border-black w-full overflow-hidden z-40"
      initial={{ y: "100%" }}
      animate={{
        y: "0%",
        transition: {
          duration: AnimationConfig.NORMAL,
          ease: AnimationConfig.EASING,
        },
      }}
      ref={containerRef}
    >
      <motion.div
        className="my-1 whitespace-nowrap"
        initial={{ x: "100%" }}
        animate={control}
        ref={ref}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default InfoBar;
