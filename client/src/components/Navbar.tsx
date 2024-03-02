import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logo from "../components/Logo";
import '../styles/Navbar.css';

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
            <CustomLink to="/adpage">Donate</CustomLink>
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
            <CustomLink to="/login" className="login-button">Login</CustomLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};


interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, children,className }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  const classNames = `hover:opacity-60 ${isActive ? "font-semibold" : ""} ${className || ""}`;

  return (
    <li className={classNames}>
      <Link to={to}>
        {children}
      </Link>
    </li>
  );
};

export default Navbar;