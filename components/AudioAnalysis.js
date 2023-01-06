import Image from "next/image";
import React from "react";
import sections from "../public/analysis.png";

const AudioAnalysis = () => {
  return (
    <div className="xs:w-[90%] w-[90%] sm:w-[80%] h-auto m-auto gap-10 items-center">
      <h1 className="font-extrabold sm, text-[24px] xs:text-[18px]">
        Explore audio features and in-depth audio analysis of tracks
      </h1>
      <div className="flex xs, sm:flex-col gap-10 xs, sm:gap-2">
        <div className="">
          <p className="font-extralight mt-5 mb-5 text-[16px] xs, sm:text-[15px]">
            Find out the danceability, the instrumentalness, or the valence of
            your favorite tracks. Get an analysis of a songs segments, bars,
            pitches, and more. With the Spotify developer platform, you can
            power up your app with advanced music metadata.
          </p>
          <Image src={sections}></Image>
        </div>
        <div className="text-[18px] mt-10  xs, sm:mt-0 bg-black_code h-fit p-5 rounded-md sm, xs, sm:overflow-x-auto">
          <pre className=""></pre>
        </div>
      </div>
    </div>
  );
};

export default AudioAnalysis;
