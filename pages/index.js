import Link from "next/link";
import React, { useState } from "react";
import AudioAnalysis from "../components/AudioAnalysis";
import AudioPlayback from "../components/AudioPlayback";
import AudioRecs from "../components/AudioRecs";
import { HomeGrid } from "../components/HomeGrid";
import changeTitle from "../hooks/changeTitle";
import { FaComments, FaTwitter } from "react-icons/fa";

const Home = () => {
  // changeTitle("Home | Spotify for Developers");
  const [analysis, setAnalysis] = useState(true);
  const [playback, setPlayback] = useState(false);
  const [recs, setRecs] = useState(false);

  const openAnalysis = () => {
    setAnalysis(!analysis);
    setPlayback(false);
    setRecs(false);
  };

  const openPlayback = () => {
    setPlayback(!playback);
    setAnalysis(false);
    setRecs(false);
  };

  const openRecs = () => {
    setRecs(!recs);
    setAnalysis(false);
    setPlayback(false);
  };

  return (
    <div>
      <div className="bg-home bg-auto bg-center xs:bg-cover sm:bg-cover h-[84vh] xs:h-auto sm:h-auto ">
        <h1 className="xs:text-[1.9rem] sm:text-[38px] xs:p-5 text-[3.7rem] xs, sm:w-[100%] w-[65%] p-10 pt-[7rem] leading-tight font-circular_bold">
          Build experiences for millions of music lovers with
          <span className="text-purple hover:underline hover:underline-offset-2 hover:text-black">
            {" "}
            playback
          </span>
          ,{" "}
          <span className="text-purple hover:underline hover:underline-offset-2 hover:text-black">
            personalization
          </span>
          , and
          <span className="text-purple hover:underline hover:underline-offset-2 hover:text-black">
            {" "}
            much, much more
          </span>
          .
        </h1>
        <button className="bg-purple xs, sm:mb-20 text-white p-4 pl-12 pr-12 rounded-[50px] uppercase font-bold tracking-widest ml-10 xs:ml-4 mt-3 hover:bg-[#BF52AB] hover:ease-in-out">
          discover features
        </button>
      </div>
      <ul className="flex sm:w-[80%] m-auto xs:w-[90%] justify-center xs, sm:justify-start p-5 xs, sm:pt-8 pt-[5rem] gap-20 font-semibold xs, sm:flex-wrap xs, sm:gap-0">
        <li className="">
          <a
            className={
              analysis
                ? "text-purple p-2 pr-10 pl-10 after:bg-purple after:mx-auto xs:w-fit  after:mt-2 after:w-10 after:h-1 flex-col flex text-[14px] "
                : "text-grey p-2 pr-10 pl-10 hover:after:bg-purple after:mx-auto xs:w-fit after:mt-2 after:w-10 after:h-1 flex-col flex text-[14px] "
            }
            onClick={openAnalysis}
          >
            AUDIO ANALYSIS 🎶
          </a>
        </li>
        <li className="shrink-0">
          <a
            className={
              playback
                ? "text-purple p-2 pr-10 pl-10 after:bg-purple after:mx-auto xs:w-fit after:mt-2 after:w-10 after:h-1 flex-col flex text-[14px] flex-shrink-0"
                : "text-grey p-2 pr-10 pl-10 hover:after:bg-purple after:mx-auto xs:w-fit after:mt-2 after:w-10 after:h-1 flex-col flex text-[14px] flex-shrink-0"
            }
            onClick={openPlayback}
          >
            AUDIO PLAYBACK 🎧
          </a>
        </li>
        <li>
          <a
            onClick={openRecs}
            className={
              recs
                ? "text-purple p-2 pr-10 pl-10 after:bg-purple after:mx-auto xs:w-fit after:mt-2 after:w-10 after:h-1 flex-col flex text-[14px]"
                : "text-grey p-2 pr-10 pl-10 hover:after:bg-purple after:mx-auto xs:w-fit after:mt-2 after:w-10 after:h-1 flex-col flex text-[14px]"
            }
          >
            RECOMMENDATIONS 🔍
          </a>
        </li>
      </ul>
      <div
        className={analysis ? "flex-col h-auto w-auto mb-[10rem]" : "hidden"}
      >
        <AudioAnalysis />
      </div>
      <div
        className={playback ? "flex-col h-auto w-auto mb-[10rem]" : "hidden"}
      >
        <AudioPlayback />
      </div>
      <div className={recs ? "flex-col h-auto w-auto mb-[10rem]" : "hidden"}>
        <AudioRecs />
      </div>
      <div className="bg-light_grey pb-[15rem] pt-[10rem]">
        {" "}
        <HomeGrid />
        <div className="w-[70%] sm:w-[95%] xs:w-[100%] m-auto flex xs, sm:flex-col  justify-evenly gap-20 p-5">
          <div className="flex-col w-[50%] xs, sm:w-[100%] font-light">
            <p className="text-[48px] xs:text-[32px] sm:text-[37px] font-extrabold mb-9">
              We'd love to hear from you.
            </p>
            <p className="text-[18px]">
              You're a big part of why Spotify is the best audio platform for
              developers. So please get in touch with your thoughts about how we
              can continue to improve our experience for developers.
            </p>
          </div>
          <div className="flex-col w-[45%] xs, sm:w-[100%] font-light">
            <p className="text-[48px] xs:text-[32px] sm:text-[37px] font-extrabold mb-9">
              Connect with the community
            </p>
            <ul className="text-[18px]">
              <li className="flex xs:flex-col xs:gap-3 gap-10">
                <Link href="/" className="flex items-center align-middle gap-2">
                  <FaComments className="text-[1.3rem]" />
                  <p>Spotify Community</p>
                </Link>
                <Link href="/" className="flex items-center align-middle gap-2">
                  <FaTwitter className="text-[1.3rem]" />
                  <p>SpotifyPlatform</p>
                </Link>
              </li>
            </ul>
            <button className="text-greenify uppercase font-bold tracking-wide mt-8 text-[14px]">
              subscribe to our newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
