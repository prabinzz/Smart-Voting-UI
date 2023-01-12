import React from "react";
import { Link } from "react-router-dom";
import { IoHomeSharp, IoPeopleSharp, IoTrophySharp } from "react-icons/io5";
const Nav = () => {
  return (
    <div className="w-full bg-light-gray">
      <div className="container mx-auto">
        {/* Nav */}
        <div className="nav-group flex lg:gap-10 gap-4">
          <Link to="/" className="nav-item flex gap-2 items-center py-4 group">
            <div className="icon lg:text-2xl sm:text-xl text-dark-gray group-hover:text-purple-600">
              <IoHomeSharp />
            </div>
            <div className="lg:text-xl sm:text-lg group-hover:text-purple-600">
              Home
            </div>
          </Link>

          <Link
            to="/voters"
            className="nav-item flex gap-2 items-center py-4 group"
          >
            <div className="icon text-2xl text-dark-gray group-hover:text-purple-600">
              <IoPeopleSharp />
            </div>
            <div className="lg:text-xl sm:text-lg group-hover:text-purple-600">
              Voter List
            </div>
          </Link>

          <Link
            to="/VoteCount"
            className="nav-item flex gap-2 items-center py-4 group"
          >
            <div className="icon text-2xl text-dark-gray group-hover:text-purple-600">
              <IoTrophySharp />
            </div>
            <div className="lg:text-xl sm:text-lg group-hover:text-purple-600">
              Vote Count
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
