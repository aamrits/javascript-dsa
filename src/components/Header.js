import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-[#ffc107] h-[50px] flex justify-center items-center mb-20 shadow">
      <Link to={"/"}>
        <p className="text-xl uppercase tracking-wider">
          Frontend Interview Questions
        </p>
      </Link>
    </nav>
  );
};

export default Header;
