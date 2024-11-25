import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Button from "./Button";
import MobileMenu from "../common/MobileMenu";
import cn from "../../assets/lib/utility/cn";

function Navbar() {
  const navigate = useNavigate();

  const Home = () => {
    navigate("/");
  };

  const singnUp = () => {
    navigate("/apDashboard");
  };

  const NavItems = [
    {
      Name: "Contact",
      link: "/contact",
    },
    {
      Name: "FAQ",
      link: "/faq",
    },
    {
      Name: "About",
      link: "/about",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full sticky left-0 top-0 z-50 py-5 px-[20px]  md:px-[70px] lg:px-[140px] bg-[#000000] border-b-[1px] border-b-gray-800 ">
      <nav className={cn(`flex justify-between items-center`)}>
        <div id="logo">
          <div onClick={Home} className="flex gap-2 cursor-pointer">
            <img
              src="./PBImage/logo-ciproxin.png"
              alt=""
              className="w-[40px]"
            />{" "}
            <p className=" flex items-center  text-white text-[20px] font-[600]">
              CIPROXIN LLC{" "}
            </p>
          </div>
        </div>

        <div id="items" className="hidden lg:flex space-x-5">
          <ul className={cn(` text-white flex items-center space-x-10`)}>
            {NavItems.map(({ Name, link }, i) => {
              return (
                <li key={i} className="font-[600] cursor-pointer">
                  <NavLink to={link}>{Name}</NavLink>
                </li>
              );
            })}
          </ul>
          <Button Name="Sign up" className="" onClick={singnUp} />
        </div>

        <div className="block lg:hidden ">
          <button onClick={toggleMenu} className="flex flex-col space-y-1">
            <span className="w-[30px] h-[3px] bg-white"> </span>
            <span className="w-[30px] h-[3px] bg-white"> </span>
            <span className="w-[30px] h-[3px] bg-white"> </span>
          </button>
        </div>

        {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
      </nav>
    </header>
  );
}

export default Navbar;
