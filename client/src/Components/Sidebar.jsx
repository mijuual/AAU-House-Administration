import React, { useState } from "react";
// import { logo, signoutIcon } from "../assets";
import {
  presidentMenu,
  directorMenu,
  headMenu,
  teamLeaderMenu,
  facilityDirectorMenu,
  vicePresMenu,
  secondaryCommitteeMenu,
  primaryCommitteeMenu,
} from "../constants/menuItems";
import { Link } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
import Logout from "../Pages/Common_Pages/logout";
import { logo } from "../assets";
//icons for last menu items
import { getRole } from "../utils/auth";
//
function Sidebar({ active }) {
  const role = getRole();

  let menu = [];
  if (role === "head") {
    menu = headMenu;
  } else if (role === "president") {
    menu = presidentMenu;
  } else if (role === "teamleader") {
    menu = teamLeaderMenu;
  } else if (role === "facilitydirector") {
    menu = facilityDirectorMenu;
  } else if (role === "vicepresident") {
    menu = vicePresMenu;
  } else if (role === "secondarycommittee") {
    menu = secondaryCommitteeMenu;
  } else if (role === "primarycommittee") {
    menu = primaryCommitteeMenu;
  } else {
    menu = directorMenu;
  }

  // menu = menu + CommonMenu;  //   const { setAuth } = useAuth();
  const [isActive, setActive] = useState(active);
  const [isLogoutOpen, setLogoutOpen] = useState(false);
  function handleClick(title) {
    setActive(title);
  }

  function openLogout() {
    setLogoutOpen(true);
  }

  function closeLogout() {
    setLogoutOpen(false);
  }

  return (
    <div className="bg-blue h-screen font-poppins overflow-hidden justify-center">
      <div className="flex py-5 px-3 justify-center">
        <img className="lg:w-16 lg:h-16 w-10 h-10 mr-2 " src={logo} alt="" />
        <div className="flex flex-col">
          <h1 className="hidden lg:inline text-4xl text-white">AAU.</h1>
          <p className="hidden lg:inline text-xs leading-none text-grey">
            {role} Dashboard
          </p>
        </div>
      </div>

      {menu.map((item) => (
        <div
          className={`mb-2 flex text-white justify-center md:justify-start
                 `}
          key={item.title}
        >
          <div
            className={`${
              isActive === item.title ? "bg-secondary" : " "
            } hidden lg:inline px-1 mr-4 py-2 rounded-tr-xl rounded-br-xl`}
          ></div>
          <Link to={item.link}>
            <button
              className={`flex rounded-xl mx-2 py-2 px-2 lg:pr-8 pr-2 hover:bg-lightPrimary ${
                isActive === item.title ? "bg-secondary" : ""
              }`}
              onClick={() => handleClick(item.title)}
            >
              <img
                className="w-5 h-5"
                src={item.icon}
                title={item.title}
                alt=""
              />
              <p className="md:ml-2 hidden md:inline text-sm lg:ml-4">
                {item.title}
              </p>
            </button>
          </Link>
        </div>
      ))}

      <hr />
      <button className="flex mx-auto lg:ml-12 my-5 " onClick={openLogout}>
        <p className="hidden md:inline text-sm text-white">Logout</p>
        {/* <img className="w-6 ml-2" src={signoutIcon} alt="" /> */}
      </button>
      <Logout isOpen={isLogoutOpen} onClose={closeLogout} />
    </div>
  );
}

export default Sidebar;
