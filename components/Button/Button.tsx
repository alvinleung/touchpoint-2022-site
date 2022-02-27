import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: string;
  href?: string;
  huge?: boolean;
  noDescender?: boolean;
};

const Button = ({ children, href, huge, noDescender }: Props) => {
  return (
    <motion.a
      className={`inline-block font-script no-underline border border-black ${
        huge ? "text-[11vw]" : ""
      } pl-[.16em] pr-[.35em] pt-[.20em] ${
        noDescender ? "pb-[.00em]" : "pb-[.12em]"
      } tracking-tighter leading-none`}
      href={href || "#"}
      whileHover={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      {children}
    </motion.a>
  );
};

export default Button;
