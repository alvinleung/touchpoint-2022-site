import React from "react";

type Props = {
  children: React.ReactNode;
  smallPadding?: boolean;
  noPadding?: boolean;
};

const ContentGroup = ({ children, smallPadding, noPadding }: Props) => {
  const padding = (() => {
    if (smallPadding) {
      return "mb-12";
    }
    if (noPadding) {
      return "mb-0";
    }

    //default
    return "mb-20";
  })();

  return <div className={padding}>{children}</div>;
};

export default ContentGroup;
