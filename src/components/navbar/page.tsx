"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navData } from "./data";
const Navbar = () => {
  const currentRoute = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full sticky top-0 left-0">
      <nav className="md:flex items-center justify-between  bg-white py-4 md:px-10 px-7">
        {/* logo */}
        <div className="font-bold text-4xl text-black">
          <Link href={"/"}>DevCT.</Link>
        </div>

        {/* humberger menlu  */}
        <div className="absolute right-2 top-2 md:hidden">
          <button
            className="focus:outline-none w-8 h-8 cursor-pointer"
            onClick={handleClick}
          >
            <span
              className={`bg-black transition-all duration-300 ease-in-out block h-0.5 w-6 ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`bg-black transition-all duration-300 ease-in-out block h-0.5 w-6 my-0.5 ${
                isOpen
                  ? "-translate-x-5 opacity-0"
                  : "translate-x-0 opacity-100"
              } `}
            ></span>
            <span
              className={`bg-black transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm ${
                isOpen ? "-rotate-45 -translate-y-1" : " translate-y-1"
              }`}
            ></span>
          </button>
        </div>
        {/* design menu  */}

        <ul
          className={`w-full bg-white pb-12 pl-9 top-20 absolute md:flex md:items-center md:pb-0  md:static -z-10 md:z-auto md:w-auto md:pl-0 transition-all duration-500  ${
            isOpen ? " left-0" : " -left-full"
          }`}
        >
          {navData.map((link) => (
            <li key={link.id} className="my-7 md:ml-8 text-xl md:my-0">
              <Link
                href={link.url}
                className={`font-bold ${
                  currentRoute === link.url ? "text-red-500" : "text-slate-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
