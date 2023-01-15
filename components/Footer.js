import Image from "next/image";
import React from "react";
import logo from "../public/footer-icon.svg";

const Footer = () => {
  return (
    <div className="bg-light_black text-white">
      <div className="flex xs:flex-col pt-20 p-5 w-[70%] xs:w-[100%] m-auto items-start pb-20 ">
        <Image src={logo} className="mr-20"></Image>
        <div className="flex xs, sm:flex-wrap gap-20 xs:mt-10 xs:ml-2">
          <div className="text-[14px]">
            <p className="font-semibold">DOCS</p>
            <ul className="font-light">
              <li className="mt-6 hover:text-greenify">General</li>
              <li className="mt-4 hover:text-greenify">Web API</li>
              <li className="mt-4 hover:text-greenify">Web Playback SDK</li>
              <li className="mt-4 hover:text-greenify">Ads API</li>
              <li className="mt-4 hover:text-greenify">iOS</li>
              <li className="mt-4 hover:text-greenify">Android</li>
              <li className="mt-4 hover:text-greenify">Embeds</li>
              <li className="mt-4 hover:text-greenify">Commercial Hardware</li>
            </ul>
          </div>
          <div className="text-[14px]">
            <p className="font-semibold">COMMUNITY</p>
            <ul className="font-light">
              <li className="mt-6 hover:text-greenify">News</li>
              <li className="mt-4 hover:text-greenify">Forum</li>
              <li className="mt-4 hover:text-greenify">Showcase</li>
            </ul>
          </div>
          <div className="text-[14px]">
            <p className="font-semibold">USE CASES</p>
            <ul className="font-light">
              <li className="mt-6 hover:text-greenify">Mobile Apps</li>
              <li className="mt-4 hover:text-greenify">Hardware</li>
            </ul>
          </div>
          <div className="text-[14px] font-semibold">
            <p className="font-semibold">SUPPORT</p>
            <ul className="">
              <li className="mt-4">DISCOVER</li>
              <li className="mt-4">CONSOLE</li>
              <li className="mt-4">DASHBOARD</li>
            </ul>
          </div>
          <div className="text-[14px] font-semibold">
            <p className="font-semibold">USE CASES</p>
            <ul className="font-light">
              <li className="mt-4 font-semibold">LEGAL</li>
              <li className="mt-6 font-normal hover:text-greenify">
                Terms of Service
              </li>
              <li className="mt-4 font-normal hover:text-greenify">
                Developer Policy
              </li>
              <li className="mt-4 font-normal hover:text-greenify">
                Third Party Licenses
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black pt-10 pb-10 ">
        <div className="text-grey w-[70%] m-auto">
          <div className="flex justify-between text-[12px]">
            <div className="flex gap-10">
              <p className="hover:text-greenify">Legal</p>
              <p className="hover:text-greenify">Cookies</p>
            </div>
            <div className="float-left">
              <p>© 2023 claudia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
