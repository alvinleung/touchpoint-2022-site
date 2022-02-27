import React from "react";
import Button from "../Button/Button";

type Props = {};

const NavLink = ({ children, href }) => (
  <a href={href} className="text-tiny no-underline mr-8 text-black">
    {children}
  </a>
);

const Nav = (props: Props) => {
  return (
    <nav className="mx-6 lg:mx-document-side z-[1000] h-24 fixed left-0 right-0 flex flex-row items-center align-center">
      <div className="flex flex-row">
        <NavLink href="#">Conference</NavLink>
        <NavLink href="#">Interview</NavLink>
        <NavLink href="#">About</NavLink>
      </div>
      <div className="ml-auto text-[30px]">
        <Button noDescender>Get Tickets</Button>
      </div>
    </nav>
  );
};

export default Nav;
