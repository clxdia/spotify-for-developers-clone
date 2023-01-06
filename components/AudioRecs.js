import React from "react";

const AudioRecs = () => {
  return (
    <div className=" xs:w-[90%] w-[90%] sm:w-[80%] h-auto m-auto gap-10 ">
      <h1 className="font-extrabold sm, text-[24px] xs:text-[18px]">
        Customize and serve Spotify&apos;s powerful recommendations to your
        users
      </h1>
      <div className="flex xs, sm:flex-col gap-10 xs, sm:gap-2">
        <div className="">
          <p className="font-extralight mt-5 mb-5 text-[16px] xs, sm:text-[15px]">
            With specific controls—such as market, seeds &#40; artists, genres,
            tracks&#41;, ranged audio features &#40;danceability, valence,
            tempo, liveness, etc&#41; and popularity, you can generate music
            recommendations based on Spotify&apos;s powerful and
            industry-leading algorithms.
          </p>
        </div>
        <div className="text-[18px]xs, sm:mt-0 bg-black_code h-fit p-5 rounded-md mt-10 xs, sm:overflow-x-auto">
          <pre></pre>
        </div>
      </div>
    </div>
  );
};

export default AudioRecs;
