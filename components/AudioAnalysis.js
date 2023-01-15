import Image from "next/image";
import React from "react";
import sections from "../public/analysis.png";

const AudioAnalysis = () => {
  return (
    <div className="xs:w-[90%] w-[90%] sm:w-[80%] h-auto m-auto gap-10 items-center">
      <h1 className="font-extrabold sm, text-[24px] xs:text-[18px]">
        Explore audio features and in-depth audio analysis of tracks
      </h1>
      <div className="flex xs, sm:flex-col gap-10 xs, sm:gap-2 w-[100%]">
        <div className="w-[50%] xs, sm:w-[100%]">
          <p className="font-extralight mt-5 mb-5 text-[16px] xs, sm:text-[15px]">
            Find out the danceability, the instrumentalness, or the valence of
            your favorite tracks. Get an analysis of a song&apos;s segments,
            bars, pitches, and more. With the Spotify developer platform, you
            can power up your app with advanced music metadata.
          </p>
          <Image src={sections}></Image>
        </div>
        <div className="text-[16px] overflow-hidden xs, sm:w-[100%] mt-10 w-[50%] xs, sm:mt-0 bg-black_code h-fit p-3 rounded-md overflow-x-auto leading-tight">
          <pre className="">
            <code className=" text-grey font-code_font">
              <span className="text-yellow_code">fetch</span>
              <span className="text-white">(</span>
              <span className="text-green_code">
                &#34;https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f&#34;
              </span>
              <span className="text-white">,</span>
              <span> </span>
              <span>&#123;</span>
              <br></br>
              <span className="pl-5">method</span>
              <span className="text-white">: </span>
              <span className="text-green_code">&#34;GET&#34;</span>
              <span className="text-white">,</span>
              <br></br>
              <span className="pl-5">headers</span>
              <span className="text-white">: </span>
              <span> </span>
              <span className="text-white">&#123;</span>
              <br></br>
              <span className="pl-10">Authorization</span>
              <span className="text-white">: </span>
              <span className="text-green_code">`Bearer </span>
              <span className="text-white">$&#123;</span>
              userAccessToken
              <span className="text-white">&#125;</span>
              <span className="text-green_code">`</span>
              <br></br>
              <span className="text-white pl-5">&#125;</span>
              <br></br>
              <span className="text-white">&#125;)</span>
              <br></br>
              <span className="text-white">.</span>
              <span className="text-yellow_code">then</span>
              <span className="text-white">(</span>
              response
              <span className="text-white">=&#62; </span>
              response
              <span className="text-white">.</span>
              <span className="text-yellow_code">json</span>
              <span className="text-white">())</span>
              <br></br>
              <span className="text-white">.</span>
              <span className="text-yellow_code">then</span>
              <span className="text-white">((&#123;</span>
              beats
              <span className="text-white">&#123;) =&#62; &#123; </span>
              <br></br>
              <span className="pl-5">beats</span>
              <span className="text-white">.</span>
              <span className="text-yellow_code">forEach</span>
              <span className="text-white">((</span>
              beat
              <span className="text-white">,</span>
              index
              <span className="text-white">) =&#62; &#123; </span>
              <br></br>
              <span className="pl-10">console</span>
              <span className="text-white">.</span>
              <span className="text-yellow_code">log</span>
              <span className="text-white">(</span>
              <span className="text-green_code">`Beat </span>
              <span className="text-white">$&#123;</span>
              index
              <span className="text-white">&#125; </span>
              <span className="text-green_code">starts at </span>
              <span className="text-white">$&#123;</span>
              beat
              <span className="text-white">.</span>
              start
              <span className="text-white">&#125;</span>
              <span className="text-green_code">`</span>
              <span className="text-white">);</span>
              <br></br>
              <span className="text-white ml-5">&#125;)</span>
              <br></br>
              <span className="text-white">&#125;)</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default AudioAnalysis;
