import React from "react";

type Props = {};

const NavLink = ({ children, href }) => (
  <a href={href} className="text-small no-underline mr-8 text-black">
    {children}
  </a>
);

const Nav = (props: Props) => {
  return (
    <nav className="mx-6 lg:mx-document-side z-1000 fixed">
      <div className="flex flex-row mt-document-top">
        <NavLink href="#">Conference</NavLink>
        <NavLink href="#">Interview</NavLink>
        <NavLink href="#">About</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
