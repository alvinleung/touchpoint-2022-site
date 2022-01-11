import React from "react";

interface Props {
  time: string;
  graduation: string;
  role: string;
  children: string;
}

export const TalkItem = ({ time, graduation, role, children }: Props) => {
  return (
    <div className="grid grid-cols-[1fr_1fr_4fr] gap-4 px-8 mt-6 border-b-[1px] border-black">
      <div className="text-small">
        <span className="font-script mr-2">Time</span>
        <span>{time}</span>
      </div>
      <div className="text-small">
        <span className="font-script mr-2">Grad</span>
        <span>{graduation}</span>
      </div>
      <div className="text-small">
        <span className="font-script mr-2">Role</span>
        <span>{role}</span>
      </div>
      <div className="col-span-3 text-big leading-[90%] tracking-tighter relative top-2 -mt-6">
        {children}
      </div>
    </div>
  );
};
