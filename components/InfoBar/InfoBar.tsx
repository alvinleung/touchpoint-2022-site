import React from "react";
import { motion } from "framer-motion";

type Props = { children: React.ReactNode };
const InfoBar = ({ children }: Props) => {
  return (
    <motion.div
      className="fixed bottom-0 text-tiny bg-accent-red border-t border-black w-full overflow-hidden z-40"
      initial={{ y: "100%" }}
      animate={{
        y: "0%",
        transition: {
          duration: 0.5,
          ease: [0.595, 0.005, 0.175, 1.005],
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
