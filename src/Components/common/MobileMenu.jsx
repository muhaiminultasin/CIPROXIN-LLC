import React from "react";
import cn from "../../assets/lib/utility/cn";
import Button from "./Button";
import { NavLink } from "react-router-dom";

function MobileMenu({toggleMenu}) {
  const NavItems = [
    {
      Name: "Contact",
      link:"/contact"
    },
    {
      Name: "FAQ",
      link:"/faq"
    },
    {
      Name: "About",
      link:"/about"
    }
  ]

  const singnUp = () => {
    navigate(
      "/apDashboard"
    )
  }

  return (
    <div>
      <nav className="absolute top-0 left-0 px-[20px] py-[50px] w-[100%] h-[100vh] bg-black text-white">
        <div className="flex justify-between">
          <p className="flex items-center"><img src="./PBImage/logo-ciproxin.png" alt="" className='w-[40px]'/>CIPROXIN LLC</p>
          <button onClick={toggleMenu} className="p-2 w-fit text-[30px] text-white rounded-full flex items-center justify-center">
            &times;
          </button>
        </div>

        <div id="items" className="mt-10">
          <ul className={cn(`space-y-5 my-5`)}>
            {NavItems.map(({ Name,link }, i) => {
              return (
                <li key={i} className="font-[600] text-[20px] cursor-pointer">
                  <NavLink to={link} onClick={toggleMenu}>{Name}</NavLink>
                </li>
              );
            })}
          </ul>
          <Button Name="Sign up" className=" text-black w-full"  onClick={singnUp}/>
        </div>
      </nav>
    </div>
  );
}

export default MobileMenu;
