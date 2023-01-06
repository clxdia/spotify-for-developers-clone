import Image from "next/image";
import Link from "next/link";
import React from "react";
import spotify from "../public/spotify.svg";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="bg-black text-white flex w-[100%]">
      <div className="flex items-center">
        <Image src={spotify} className="w-[130px] p-4 pr-0 min-w-[130px]" />
        <p className="text-[22px] font-[200]">forDevelopers</p>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
