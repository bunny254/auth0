import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="flex bg-red-200">
        <Link to="/">
          <h1 className="px-4 py-2 text-xl text-black cursor-pointer">
            Welcome
          </h1>
        </Link>
        <div className="flex ml-[20%] gap-4">
        <Link to="/public">
          <h1 className="mt-3 ml-3 text-black">Public</h1>
        </Link>
        <Link to="/signin">
          <h1 className="mt-3 ml-3 text-black">Login</h1>
        </Link>
        <Link to="/profile">
          <h1 className="mt-3 ml-3 text-black">Profile</h1>
        </Link>

        </div>
        
      </nav>
    </div>
  );
};

export default Nav;
