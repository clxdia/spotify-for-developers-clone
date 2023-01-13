import Link from "next/link";
import React from "react";

const community = () => {
  return (
    <div>
      <div className="flex xs, sm:hidden text-white tracking-wide">
        <div className="h-[2rem] w-[300px] min-w-[300px] bg-greenify flex pl-5 items-center">
          <Link href="/community" className="text-[15px]">
            COMMUNITY
          </Link>
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
      <main className="flex relative">
        <aside className="bg-aside w-[300px] min-w-[300px] h-auto xs, sm2:hidden"></aside>
        <section className="p-10 flex flex-col gap-9 mb-24">
          <h1 className="font-circular_bold">Community </h1>
          <h2 className="font-circular_bold">Spotify’s developer community</h2>
        </section>
      </main>
    </div>
  );
};

export default community;
