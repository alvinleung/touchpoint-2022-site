import React, { MutableRefObject, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface Props {}

export const Intermission = (props: Props) => {
  const scrollAnimation = useAnimation();

  const lastElmRef =
    useRef<HTMLSpanElement>() as MutableRefObject<HTMLSpanElement>;

  useEffect(() => {
    if (typeof lastElmRef.current === "undefined") {
      console.warn("last element not found");
      return;
    }

    const lastElmPosX = lastElmRef.current?.getBoundingClientRect().x;

    function resetAnimation() {
      if (typeof window === "undefined" || !lastElmPosX) return;

      scrollAnimation.set({
        x: 0,
      });

      const targetOffset = -lastElmPosX + 180;

      scrollAnimation.start({
        x: targetOffset,
        transition: { repeat: Infinity, duration: 8, ease: "linear" },
      });
    }
    window.addEventListener("resize", resetAnimation);
    resetAnimation();
    return () => window.removeEventListener("resize", resetAnimation);
  }, []);

  return (
    <div className="overflow-hidden -mb-20">
      <div className="border-b-[1px] border-black relative bottom-20">
        <motion.div
          animate={scrollAnimation}
          className="text-huge-script font-script leading-none relative top-[.305em] tracking-tight whitespace-nowrap"
        >
          <span className="mx-12">Intermission</span>
          <span ref={lastElmRef} className="mx-12">
            Intermission
          </span>
          <span className="mx-12">Intermission</span>
        </motion.div>
      </div>
    </div>
  );
};
