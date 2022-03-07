import React, { MutableRefObject, useEffect, useRef } from "react";
import { useNavContext } from "../Nav/Nav";

type Props = {
  children: React.ReactNode;
  id?: string;
  noStyling?: boolean;
};

const Section = ({ children, id, noStyling }: Props) => {
  const sectionRef = useRef() as MutableRefObject<HTMLElement>;
  const { currentSection, setCurrentSection } = useNavContext();

  useEffect(() => {
    if (!id) return;

    const observerOptions = {
      threshold: 0,
      rootMargin: "-50%  0px",
    };
    const observer = new IntersectionObserver((entries, observe) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        setCurrentSection(id);
      }
    }, observerOptions);
    observer.observe(sectionRef.current);

    return () => {
      observer.unobserve(sectionRef.current);
    };
  }, []);

  if (noStyling)
    return (
      <section id={id} ref={sectionRef}>
        {children}
      </section>
    );

  return (
    <section
      ref={sectionRef}
      id={id}
      className="pb-[1.5em] pt-[1.5em] px-4 2xl:px-document-side border-t border-black text-big"
    >
      {children}
    </section>
  );
};

export default Section;
