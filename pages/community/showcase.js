import Image from "next/image";
import Link from "next/link";
import React from "react";

import img1 from "/public/showcase2.png";
const showcase = () => {
  return (
    <div>
      <div className="flex xs, sm:hidden text-white tracking-wide">
        <div className="h-[2rem] w-[300px] min-w-[300px] bg-greenify flex pl-5 items-center">
          <p className="text-[15px] font-normal">SHOWCASE</p>
        </div>
        <div className="h-[2rem] bg-black_code w-[100%] flex gap-10 pl-5 items-center">
          <Link href="/community/news" className="text-[14px]">
            NEWS
          </Link>
          <Link href="/community/forum" className="text-[14px]">
            FORUM
          </Link>
          <Link href="/community/showcase" className="text-[14px]">
            SHOWCASE
          </Link>
        </div>
      </div>
      <main className="p-10 mt-10 flex flex-col gap-9 mb-24 w-[85%] m-auto">
        <h1 className="font-circular_bold text-[80px]">Developer Showcase </h1>
        <p className="w-[33%]">
          Looking for inspiration? Take a look at these outstanding apps, all
          built using our APIs, SDKs and other developer tools.{" "}
        </p>
        <section className="flex flex-col">
          <div className="flex justify-between">
            <div className="bg-[url('/showcase1.png')] showcase bg-cover"></div>
            <div className="bg-[url('/showcase1.png')] showcase bg-cover"></div>
            <div className="bg-[url('/showcase1.png')] showcase bg-cover"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default showcase;
