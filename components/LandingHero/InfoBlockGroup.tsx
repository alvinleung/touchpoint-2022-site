import React from "react";

type Props = {
  children: React.ReactNode;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  column?: boolean;
  row?: boolean;
};

const InfoBlockGroup = ({
  children,
  left,
  top,
  right,
  bottom,
  column,
}: Props) => {
  const isRoot =
    typeof left !== "undefined" ||
    typeof top !== "undefined" ||
    typeof right !== "undefined" ||
    typeof bottom !== "undefined"
      ? false
      : true;

  return (
    <div
      style={{
        position: isRoot ? "relative" : "absolute",
        left: typeof top !== "undefined" ? `${left}%` : undefined,
        bottom: typeof bottom !== "undefined" ? `${bottom}%` : undefined,
        right: typeof right !== "undefined" ? `${right}%` : undefined,
        top: typeof top !== "undefined" ? `${top}%` : undefined,
        flexDirection: column ? "column" : "row",
      }}
      className={`flex flex-grow ${isRoot ? "mx-2 md:mx-document-side" : ""}`}
    >
      {children}
    </div>
  );
};

export default InfoBlockGroup;
