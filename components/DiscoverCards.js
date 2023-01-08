import Image from "next/image";
import React from "react";
import audio1 from "/public/audio-1.svg";
import audio2 from "/public/audio-2.svg";
import audio3 from "/public/audio-3.svg";

const DiscoverCards = ({ title, subtitle, bio, list, button }) => {
  return (
    <div className="flex flex-col gap-5 w-[50%] sm:w-[100%]">
      <h1 className="font-circular_bold">
        {title}
        <div className="w-fit inline-block">
          <div className="flex ml-3 gap-2 ">
            <Image src={audio1}></Image>
            <Image src={audio2}></Image>
            <Image src={audio3}></Image>
          </div>
        </div>
      </h1>

      <h4 className="font-semibold">{subtitle}</h4>
      <p className="text-[15px]">{bio}</p>
      <ul className="text-[15px] list-disc list-inside font-[200] ml-6 flex flex-col gap-1">
        {list}
      </ul>
      <button className="bg-greenify w-fit text-[14px] xs, sm:mb-3 text-white p-4 pl-10 pr-10 rounded-[50px] uppercase font-bold tracking-widest mt-3 hover:bg-link hover:ease-in-out">
        {button}
      </button>
    </div>
  );
};

export default DiscoverCards;
