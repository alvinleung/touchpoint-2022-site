import React from "react";

type Props = {
  children: React.ReactNode;
  smallPadding?: boolean;
  noPadding?: boolean;
};

const ContentGroup = ({ children, smallPadding, noPadding }: Props) => {
  const padding = (() => {
    if (smallPadding) {
      return "mb-[.75em]";
    }
    if (noPadding) {
      return "mb-0";
    }

    //default
    return "mb-[1em]";
  })();

  return <div className={padding}>{children}</div>;
};

export default ContentGroup;
