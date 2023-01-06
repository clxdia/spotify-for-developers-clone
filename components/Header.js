import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import spotify from "../public/spotify.svg";
import news from "../public/news.svg";
import forum from "../public/forum.svg";
import showcase from "../public/showcase.svg";
import mobile from "../public/mobile.svg";
import hardware from "../public/hardware.svg";

const Header = () => {
  const [isCommunityOpen, setCommunityOpen] = useState(false);
  const [isCasesOpen, setCasesOpen] = useState(false);
  return (
    <header className="bg-black text-white w-[100%]">
      <div className="flex">
        <div className="flex items-center">
          <Image src={spotify} className="w-[130px] p-4 pr-0 min-w-[130px]" />
          <p className="text-[22px] font-[200]">forDevelopers</p>
        </div>
        <div className="p-6 font-[200] w-[100%] ml-10 text-[14px]">
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
  );
};

export default Header;
