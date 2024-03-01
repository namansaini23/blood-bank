import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logo from "../components/Logo";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <Logo />
          <span className="font-semibold text-lg">Blood bank</span>
        </Link>
        <ul className="ml-auto flex space-x-4">
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/donate">Donate</CustomLink>
          </li>
          <li>
            <CustomLink to="/postad">Get blood</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About us</CustomLink>
          </li>
          <li>
            <CustomLink to="/contact">Contact us</CustomLink>
          </li>
          <li>
            <Link to="/login" className="btn-special">Log in</Link>
          </li>
          <li>
            <Link to="/signup" className="btn-special">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};


interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, children }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "font-semibold" : ""}>
      <Link to={to} className="hover:opacity-60">
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
