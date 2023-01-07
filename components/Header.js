import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../public/logo.svg";
import news from "../public/news.svg";
import forum from "../public/forum.svg";
import showcase from "../public/showcase.svg";
import mobile from "../public/mobile.svg";
import hardware from "../public/hardware.svg";
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { Turn as Hamburger } from "hamburger-react";

const Header = () => {
  const [isCommunityOpen, setCommunityOpen] = useState(false);
  const [isCasesOpen, setCasesOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-black p-[0.9rem] text-white w-[100%] relative">
        <div className="flex items-center sm:justify-between">
          <div className="flex items-center">
            <Image
              src={logo}
              className="w-[250px] ml-[4px] pb-[5px] min-w-[250px]"
            />
          </div>
          <div className="pl-10 font-[200] w-[100%] ml-10 text-[14px] sm:hidden">
            <ul className="uppercase flex justify-start gap-[4rem] font-circular_light">
              <li className="hover:text-greenify hover:transition hover:ease-in-out">
                <Link href="/discover">discover</Link>
              </li>
              <li className=" hover:transition hover:ease-in-out hover:text-greenify ">
                <Link
                  href="/community"
                  onMouseEnter={() => setCommunityOpen(true)}
                >
                  community
                </Link>
              </li>
              <li className="hover:text-greenify hover:transition hover:ease-in-out">
                <Link href="/dashboard">dashboard</Link>
              </li>
              <li className="hover:text-greenify hover:transition hover:ease-in-out">
                <Link href="/use-cases" onMouseEnter={() => setCasesOpen(true)}>
                  use cases
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <Hamburger size={25} toggled={isMenuOpen} toggle={setMenuOpen} />
          </div>
        </div>

        {isCommunityOpen && (
          <div
            className="bg-black_code block absolute p-10 w-[100%] font-bold"
            onMouseLeave={() => setCommunityOpen(false)}
          >
            <ul className="flex gap-20">
              <li>
                <Link href="/news">
                  <Image src={news} className="mb-3"></Image>
                  NEWS
                </Link>
              </li>
              <li>
                <Link href="/forum">
                  <Image src={forum} className="mb-3"></Image>
                  FORUM
                </Link>
              </li>
              <li>
                <Link href="/showcase">
                  <Image src={showcase} className="mb-3"></Image>
                  SHOWCASE
                </Link>
              </li>
            </ul>
          </div>
        )}

        {isCasesOpen && (
          <div
            className="bg-black_code block absolute p-10 w-[100%] font-bold"
            onMouseLeave={() => setCasesOpen(false)}
          >
            <ul className="flex gap-20 text-[14px]">
              <li className="flex-col flex gap-2">
                <Link className="mb-2" href="/mobile-apps">
                  <Image src={mobile} className="mb-3"></Image>
                  MOBILE APPS
                </Link>
                <Link className="font-light" href="/messaging">
                  Messaging
                </Link>
                <Link className="font-light" href="/connection-flow">
                  Connection Flow
                </Link>
                <Link className="font-light" href="/content">
                  Content
                </Link>
              </li>
              <li className="flex-col flex gap-2">
                <Link className="mb-2" href="/hardware">
                  <Image src={hardware} className="mb-3"></Image>
                  HARDWARE
                </Link>
                <Link className="font-light" href="/voice-integrations">
                  Voice Integrations
                </Link>
                <Link className="font-light" href="/new-emerging">
                  New & Emerging
                </Link>
                <Link className="font-light" href="/wearables">
                  Wearables
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
      <div
        className={
          isMenuOpen
            ? "md:hidden bg-menu_grey block w-full h-[316px] align-items ease-in duration-200"
            : "md:hidden bg-menu_grey block mt-[-316px] w-full ease-in duration-200"
        }
      >
        <nav className="text-white text-[14px] font-light uppercase">
          <ul>
            <li className="hover:text-greenify hover:transition hover:ease-in-out p-7 border-[1px] border-x-black_code border-y-dark_grey">
              <Link href="/discover">discover</Link>
            </li>
            <li className="hover:text-greenify hover:transition hover:ease-in-out p-7 border-[1px] border-x-black_code border-b-dark_grey border-t-light_black">
              <Link href="/community">community</Link>
            </li>
            <li className="hover:text-greenify hover:transition hover:ease-in-out p-7 border-[1px] border-x-black_code border-y-light_black">
              <Link href="/dashboard">dashboard</Link>
            </li>
            <li className="hover:text-greenify hover:transition hover:ease-in-out p-7 border-[1px] border-x-black_code border-t-dark_grey border-b-menu_grey">
              <Link href="/use-cases">use cases</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
