import React from "react";

type Props = {
  children: String;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

const InfoBlock = ({ children, left, top, right, bottom }: Props) => {
  const hasPosition =
    typeof left !== "undefined" ||
    typeof top !== "undefined" ||
    typeof right !== "undefined" ||
    typeof bottom !== "undefined"
      ? true
      : false;

  return (
    <div
      style={{
        position: hasPosition ? "absolute" : "relative",
        left: typeof top !== "undefined" ? `${left}%` : undefined,
        bottom: typeof bottom !== "undefined" ? `${bottom}%` : undefined,
        right: typeof right !== "undefined" ? `${right}%` : undefined,
        top: typeof top !== "undefined" ? `${top}%` : undefined,
      }}
      className="absolute bg-black text-white border-2 border-white text-fluid-medium px-fluid-medium py-fluid-small"
    >
      {children}
    </div>
  );
};

export default InfoBlock;
