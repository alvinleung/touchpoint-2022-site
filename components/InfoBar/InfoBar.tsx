import React from "react";
import { motion } from "framer-motion";
import { AnimationConfig } from "../AnimationConfig";

type Props = { children: React.ReactNode };
const InfoBar = ({ children }: Props) => {
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
    >
      <motion.div
        className="my-1 whitespace-nowrap"
        initial={{ x: 1000 }}
        animate={{
          x: -1000,
          transition: { duration: 20, ease: "linear", repeat: Infinity },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default InfoBar;
