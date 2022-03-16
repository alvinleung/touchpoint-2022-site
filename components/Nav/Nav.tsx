import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { AnimationConfig } from "../AnimationConfig";
import {
  breakpoints,
  useBreakpoint,
  useMobileBreakpoint,
} from "../../hooks/useBreakpoint";
import GetTicketsButton from "../Button/GetTicketsButton";

type Props = {
  isLoaded: boolean;
  children: React.ReactNode;
};

const NavLink = ({
  children,
  href,
  isActive,
  navItemIndex,
  currentIndex,
  onLinkHover,
  onClick,
}) => {
  const motionDiretion = currentIndex > navItemIndex ? "+" : "-";

  return (
    <a
      href={href}
      className="text-tiny no-underline mr-4 sm:mr-8 text-black flex flex-row items-center"
      onMouseEnter={() => onLinkHover()}
      onClick={onClick}
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

const Nav = ({ children, isLoaded }: Props) => {
  // the section in view
  const [currentSection, setCurrentSection] = useState(NavSections[0]);
  // the dispalying section
  const [isHovering, setIsHovering] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const selectionIndex = NavSections.indexOf(activeSection);

  const [isJumpingToSection, setIsJumpingToSection] = useState(false);

  const mobileBreakpoint = useMobileBreakpoint();

  const jumpSectionTimer = useRef(null);
  function jumpToSection() {
    setIsJumpingToSection(true);
    jumpSectionTimer.current && clearTimeout(jumpSectionTimer.current);
    jumpSectionTimer.current = setTimeout(
      () => setIsJumpingToSection(false),
      1000
    );
  }

  useEffect(() => {
    const handleWheel = () => {
      setIsJumpingToSection(false);
      jumpSectionTimer.current && clearTimeout(jumpSectionTimer.current);
    };
    window.addEventListener("wheel", () => handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    if (isJumpingToSection || isHovering) return;
    setActiveSection(currentSection);
  }, [currentSection, isJumpingToSection, isHovering]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        className="mx-4 md:mx-document-side z-[1000] h-16 sm:h-24 fixed left-0 right-0 flex flex-row items-center align-center"
      >
        <div
          className="flex flex-row"
          onMouseLeave={() => setIsHovering(false)}
          onMouseEnter={() => setIsHovering(true)}
        >
          {NavSections.map((navSection, i) => {
            const isHoveringSection = activeSection === navSection;

            return (
              <NavLink
                href={`#${navSection}`}
                isActive={isHoveringSection}
                currentIndex={selectionIndex}
                navItemIndex={i}
                key={i}
                onLinkHover={() => setActiveSection(navSection)}
                onClick={() => jumpToSection()}
              >
                {navSection}
              </NavLink>
            );
          })}
        </div>
        <div className="ml-auto text-[30px]">
          {mobileBreakpoint && <GetTicketsButton />}
        </div>
      </motion.nav>
      <NavContext.Provider value={{ currentSection, setCurrentSection }}>
        {children}
      </NavContext.Provider>
    </>
  );
};

export { Nav };
