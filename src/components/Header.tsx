import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-neutral shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
          <Search />
        </div>
        <div className="flex-none gap-2">
        </div>
      </div>
    </div>
  );
}

export default Header;
