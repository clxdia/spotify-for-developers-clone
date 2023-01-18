import Link from "next/link";
import React, { useState } from "react";

export const HomeGrid = () => {
  const [sdk, setSdk] = useState(false);
  const [lib, setLib] = useState(false);
  const [showcase, setShowcase] = useState(false);
  const [long, setLong] = useState(false);

  return (
    <div className="w-[80%] xs, sm:w-[90%] m-auto text-center mb-[20rem] xs:mb-[30px]">
      <h4 className="text-[32px] xs:text-[27px] font-black mb-[3rem]">
        What&apos;s new in our community?
      </h4>
      <div className="flex sm:flex-col gap-[3vw]">
        <Link
          href="/"
          onMouseEnter={() => setLong(true)}
          onMouseLeave={() => setLong(false)}
        >
          <div className="flex flex-col justify-between xs, sm:w-[100%] sm:h-[100%] bg-[url('/tile1.jpg')] bg-[length:130%] text-blue text-[18px] font-light bg-center w-[25vw] h-[53vw] relative overflow-hidden ">
            <div className="flex flex-col justify-between h-[100%] p-[40px] z-[4]">
              <p className="text-[18px] font-[400] text-left">EVENT</p>
              <div className=" h-[100%] flex flex-col justify-end xs:pb-2 pb-5 sm:mt-10 xs:mt-5">
                <p className="xs:text-[27px] text-[31px] font-extrabold text-left">
                  Developer Day at Spotify, March 25th
                </p>
                <p className="xs:text-[16px] text-left">
                  Developer Day at Spotify is a three-hour online event for all
                  developers interested in Spotify&apos;s open developer
                  platform
                </p>
              </div>
            </div>
            <div
              className={
                long
                  ? "bg-[url('/tile1.jpg')] bg-[length:135%] bg-center w-[25vw] h-[53vw] xs, sm:w-[100%] sm:h-[100%] opacity-100 grid-overlay-2 absolute"
                  : "bg-[url('/tile1.jpg')] xs, sm:w-[100%] sm:h-[100%] bg-center w-[25vw] h-[53vw] absolute opacity-0 bg-[length:130%] grid-overlay-2"
              }
            ></div>
          </div>
        </Link>
        <div className="sm:overflow-hidden ">
          <div className="flex gap-[3vw] xs:flex-col">
            <Link
              href="/"
              className="bg-light_green sm:max-w-none sm:w-[100%]"
              onMouseEnter={() => setSdk(true)}
              onMouseLeave={() => setSdk(false)}
            >
              <div className="flex flex-col sm:flex-auto sm:h-[100%] sm:w-[100%] justify-end text-white text-left h-[25vw] w-[25vw] max-w-[450px] max-h-[450px] bg-no-repeat overflow-hidden bg-cover p-0 z-[4] relative">
                <div className="flex flex-col justify-between h-[100%] p-[40px]">
                  <p className="text-[18px] font-[400] z-[4]">BLOG</p>
                  <p className=" xs:text-[27px] text-[31px] font-extrabold z-[4]">
                    An update on the deprecated mobile streaming SDKs
                  </p>
                </div>
                <div
                  className={
                    sdk
                      ? "bg-[url('/tile2.svg')] bg-[center_left_1px] absolute h-[25vw] w-[25vw] max-w-[450px] max-h-[450px] bg-[length:590px_590px] sm:h-[100%] sm:w-[100%]  opacity-100 grid-overlays "
                      : "bg-[url('/tile2.svg')] bg-[length:550px_550px] bg-[center_left_1px] absolute sm:h-[100%] sm:w-[100%]  opacity-0 h-[25vw] w-[25vw] max-w-[450px] max-h-[450px] grid-overlays"
                  }
                ></div>
              </div>
            </Link>
            <Link
              href="/"
              className="bg-grey sm:max-w-none sm:w-[100%]"
              onMouseEnter={() => setLib(true)}
              onMouseLeave={() => setLib(false)}
            >
              <div className="flex flex-col sm:flex-auto sm:h-auto sm:w-[100%] justify-end text-white text-left h-[25vw] w-[25vw] max-w-[450px] max-h-[450px] bg-no-repeat overflow-hidden bg-cover p-0 z-[4] relative">
                <div className="flex flex-col justify-between h-[100%] p-[40px] z-[4]">
                  <p className="text-[18px] font-[400]">BLOG</p>
                  <p className="xs:text-[27px] text-[31px] font-extrabold">
                    Sunset of libspotify on May 16, 2022
                  </p>
                </div>
                <div
                  className={
                    lib
                      ? "bg-[url('/tile3.svg')] bg-[center_left_1px] absolute h-[25vw] w-[25vw] max-w-[450px] max-h-[450px] bg-[length:620px_620px] opacity-100 grid-overlays sm:h-[100%] sm:w-[100%]"
                      : "bg-[url('/tile3.svg')] bg-[length:550px_550px] bg-[center_left_1px] absolute opacity-0 h-[25vw] w-[25vw] max-w-[450px] max-h-[450px] sm:h-[100%] sm:w-[100%] grid-overlays"
                  }
                ></div>
              </div>
            </Link>
          </div>
          <Link
            href="/"
            className="bg-blue sm:max-w-none sm:w-[100%]"
            onMouseEnter={() => setShowcase(true)}
            onMouseLeave={() => setShowcase(false)}
          >
            <div className="sm:h-[100%] sm:w-[100%] overflow-hidden flex flex-col justify-between relative text-white text-left bg-[center_left_1px] max-w-[1000px] h-[25vw] max-h-[450px] mt-[3vw] w-[53vw]  bg-blue">
              <div className="flex flex-col justify-between h-[100%] p-[40px] z-[4]">
                <p className="text-[18px] font-[400]">DEV SHOWCASE</p>
                <div className="flex xs:flex-col items-end xs:items-start sm:mt-5">
                  <p className="xs:text-[27px] text-[31px] font-extrabold mr-[8vw]">
                    Discover Quickly
                  </p>
                  <p className="mb-0">An interface for music discovery.</p>
                </div>
              </div>
              <div
                className={
                  showcase
                    ? "bg-[url('/tile4.svg')] bg-center absolute h-[25vw] w-[75vw] max-w-[1000px] max-h-[1000px] bg-[length:1250px_1250px] opacity-100 grid-overlays sm:h-[100%] sm:w-[100%]"
                    : "bg-[url('/tile4.svg')] bg-[length:1100px_1100px] bg-center absolute opacity-0 h-[25vw] w-[75vw] max-w-[1000px] max-h-[1000px] sm:h-[100%] sm:w-[100%] grid-overlays"
                }
              ></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
