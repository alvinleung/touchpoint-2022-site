import React from "react";

type Props = {
  children: React.ReactNode;
};

const Section = ({ children }: Props) => {
  return (
    <section className="pb-[1.5em] pt-[1.5em] px-4 lg:px-document-side border-t border-black text-big">
      {children}
    </section>
  );
};

export default Section;
