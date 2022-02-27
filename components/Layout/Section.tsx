import React from "react";

type Props = {
  children: React.ReactNode;
};

const Section = ({ children }: Props) => {
  return (
    <section className="pb-48 pt-48 px-6 lg:px-document-side border-t border-black">
      {children}
    </section>
  );
};

export default Section;
