"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import logo from "@/public/hilink-logo.svg";
import user from "@/public/user.svg";
import menu from "@/public/menu.svg";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 shadow-sm lg:shadow-none">
      <Link href="#home">
        <Image src={logo} alt="logo" width={100} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:text-green-50 hover:font-medium"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon={user}
          variant="btn_dark_green"
        />
      </div>

      <Image
        src={menu}
        alt="menu"
        width={30}
        height={30}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setToggle((prev) => !prev)}
      />
      {toggle && (
        <div className="lg:hidden absolute h-500px w-[100%]  top-20 right-0 bg-white transition-all rounded-[1rem] shadow-md py-5 flexCenter flex-col gap-5">
          <ul className="flexCenter flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                onClick={() => setToggle(false)}
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <Button
            type="button"
            title="Login"
            icon={user}
            variant="btn_dark_green"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
