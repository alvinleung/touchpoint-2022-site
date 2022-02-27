import React from "react";

type Props = {
  children: React.ReactNode;
  smallPadding?: boolean;
};

const ContentGroup = ({ children, smallPadding }: Props) => {
  return (
    <div className={`${smallPadding ? "mb-12" : "mb-24"}`}>{children}</div>
  );
};

export default ContentGroup;
