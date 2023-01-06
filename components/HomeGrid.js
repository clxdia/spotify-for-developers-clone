import React from "react";

export const HomeGrid = () => {
  return (
    <div className="w-[80%] xs, sm:w-[90%] m-auto text-center mb-[20rem]">
      <h4 className="text-[32px] font-black mb-[3rem]">
        What&apos;s new in our community?
      </h4>
      <div className="flex sm:flex-col gap-[3vw]">
        <div className="flex flex-col justify-between xs, sm:w-full sm:h-auto bg-[url('../public/tile1.jpg')] bg-cover text-blue text-[18px] font-light p-10 bg-center w-[25vw] h-[53vw] ">
          <p className="text-[18px] font-[400] text-left">EVENT</p>
          <div className=" h-[100%] flex flex-col justify-end xs:pb-2 pb-5 sm:mt-10 xs:mt-5">
            <p className="xs:text-[27px] text-[31px] font-extrabold text-left">
              Developer Day at Spotify, March 25th
            </p>
            <p className="xs:text-[16px] text-left">
              Developer Day at Spotify is a three-hour online event for all
              developers interested in Spotify&apos;s open developer platform
            </p>
          </div>
        </div>
        <div className="sm:overflow-hidden ">
          <div className="flex gap-[3vw] xs:flex-col">
            <div className="flex flex-col sm:flex-auto sm:h-auto sm:w-[100%] justify-between bg-light_green hover:bg-[url('../public/tile2.svg')] transition ease-in-out delay-150 relative text-white text-left p-10 bg-[length:140%] bg-[center_left_1px] h-[25vw] w-[25vw] max-w-[450px] max-h-[450px] sm:max-w-none">
              <p className="text-[18px] font-[400]">BLOG</p>
              <p className=" xs:text-[27px]  text-[31px] font-extrabold">
                An update on the deprecated mobile streaming SDKs
              </p>
            </div>
            <div className="flex flex-col sm:flex-auto sm:h-auto sm:w-[100%] justify-between hover:bg-[url('../public/tile3.svg')] relative bg-grey text-white p-10 text-left bg-[length:140%] bg-[center_left_1px] h-[25vw] w-[25vw] max-w-[450px] max-h-[450px] sm:max-w-none">
              <p className="text-[18px] font-[400]">BLOG</p>
              <p className="xs:text-[27px] text-[31px] font-extrabold">
                Sunset of libspotify on May 16, 2022
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:h-auto justify-between bg-blue hover:bg-[url('../public/tile4.svg')] hover:animate-ltr-linear-infinite relative text-white p-10 text-left bg-[length:140%] bg-[center_left_1px] max-w-[1000px] h-[25vw] max-h-[450px] mt-[3vw]">
            <p className="text-[18px] font-[400]">DEV SHOWCASE</p>
            <div className="flex xs:flex-col items-end xs:items-start sm:mt-5">
              <p className="xs:text-[27px] text-[31px] font-extrabold mr-[8vw]">
                Discover Quickly
              </p>
              <p className="mb-0">An interface for music discovery.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
