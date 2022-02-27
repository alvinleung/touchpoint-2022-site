import React from "react";

type Props = {
  children: String;
};

const InfoBlock = ({ children }: Props) => {
  return (
    <div className="absolute bottom-[30vh] left-[40vh] text-6xlg bg-black text-white border-white ">
      {children}
    </div>
  );
};

export default InfoBlock;
