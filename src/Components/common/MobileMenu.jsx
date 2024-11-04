import React from "react";
import cn from "../../assets/lib/utility/cn";
import Button from "./Button";

function MobileMenu() {
  const NavItems = [
    {
      Name: "Support",
      link: "/Products",
    },
    {
      Name: "Contact",
      link: "/Products",
    },
    {
      Name: "About",
      link: "/Products",
    },
    {
      Name: "Login",
      link: "/Products",
    },
  ];

  return (
    <div>
      <nav className="px-[20px] py-[50px] w-[80%] h-[95vh] bg-black text-white">
        <div className="flex justify-between items-center">
          <p>Logo</p>
          <button className="p-2 w-fit text-[30px] text-white rounded-full flex items-center justify-center">
            &times;
          </button>
        </div>

        <div id="items" className="mt-10">
          <ul className={cn(`space-y-5 my-5`)}>
            {NavItems.map(({ Name, link }, i) => {
              return (
                <li key={i} className="font-[600] text-[20px] cursor-pointer">
                  {Name}
                </li>
              );
            })}
          </ul>
          <Button Name="Sign up" className=" text-black w-full" />
        </div>
      </nav>
    </div>
  );
}

export default MobileMenu;
