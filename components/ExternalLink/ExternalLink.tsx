import { motion } from "framer-motion";
import React, { useState } from "react";
import { AnimationConfig } from "../AnimationConfig";

type Props = {
  children: string;
  href: string;
};

const transition = {
  ease: AnimationConfig.EASING,
  duration: AnimationConfig.FAST,
};

const ExternalLink = ({ children, href }: Props) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <a
      href={href}
      className="inline-flex items-center justify= no-underline"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className="mr-[.5em]">{children}</span>{" "}
      <div className="h-[.72em] w-[.72em] overflow-hidden relative">
        <motion.img
          animate={{
            y: isHovering ? "-.72em" : "0em",
            x: isHovering ? ".72em" : "0em",
          }}
          src="icon-external-link.svg"
          transition={transition}
        />
        <motion.img
          animate={{
            y: isHovering ? "-.72em" : "0em",
            x: isHovering ? ".72em" : "0em",
          }}
          className="mt-[.05em] absolute left-[-100%]"
          src="icon-external-link.svg"
          transition={transition}
        />
      </div>
    </a>
  );
};

export default ExternalLink;
