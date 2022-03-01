import React, { useContext, useRef, useState } from "react";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { AnimationConfig } from "../AnimationConfig";

type Props = {
  children: React.ReactNode;
};

const NavLink = ({ children, href, isActive, navItemIndex, currentIndex }) => {
  const motionDiretion = currentIndex > navItemIndex ? "+" : "-";

  return (
    <a
      href={href}
      className="text-tiny no-underline mr-8 text-black flex flex-row items-center"
    >
      <div className="rounded-full w-[.5em] h-[.5em] border border-black mr-[.3em] overflow-hidden">
        <motion.div
          className="w-full h-full bg-black rounded-full"
          initial={{ x: "-100%" }}
          animate={{
            x: isActive ? 0 : motionDiretion + "100%",
          }}
          transition={{
            ease: AnimationConfig.EASING,
            duration: 0.2,
          }}
        ></motion.div>
      </div>
      {children}
    </a>
  );
};

export const NavSections = ["Conference", "About", "Interview"];

interface INavContext {
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
  currentSection: string;
}
const NavContext = React.createContext<INavContext>(null);
export const useNavContext = () => useContext(NavContext);

const Nav = ({ children }: Props) => {
  const [currentSection, setCurrentSection] = useState(NavSections[0]);
  const selectionIndex = NavSections.indexOf(currentSection);

  return (
    <>
      <nav className="mx-4 lg:mx-document-side z-[1000] h-24 fixed left-0 right-0 flex flex-row items-center align-center">
        <div className="flex flex-row">
          {NavSections.map((navSection, i) => (
            <NavLink
              href={`#${navSection}`}
              isActive={currentSection === navSection}
              currentIndex={selectionIndex}
              navItemIndex={i}
              key={i}
            >
              {navSection}
            </NavLink>
          ))}
        </div>
        <div className="ml-auto text-[30px]">
          <Button noDescender>Get Tickets</Button>
        </div>
      </nav>
      <NavContext.Provider value={{ currentSection, setCurrentSection }}>
        {children}
      </NavContext.Provider>
    </>
  );
};

export { Nav };
