import React from "react";

type Props = {
  children: React.ReactNode;
};

const ContentGroup = ({ children }: Props) => {
  return <div className="mb-24">{children}</div>;
};

export default ContentGroup;
