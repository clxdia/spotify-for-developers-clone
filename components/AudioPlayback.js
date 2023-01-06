import React from "react";

const AudioPlayback = () => {
  return (
    <div className="xs:w-[90%] w-[90%] sm:w-[80%] h-auto m-auto gap-10 ">
      <h1 className="font-extrabold sm, text-[24px] xs:text-[18px]">
        Play audio in the web with the Web Playback SDK
      </h1>
      <div className="flex xs, sm:flex-col gap-10 xs, sm:gap-2">
        <div>
          <p className="font-extralight mt-5 mb-5 text-[16px] xs, sm:text-[15px]">
            Add a feature-rich Spotify Connect player to your web app. Enable
            Spotify Premium users to stream songs and podcast episodes from
            Spotify, right in the browser. Build an interface that allows users
            to skip songs, seek within a track, or turn up the volume.
          </p>
        </div>
        <div className="text-[18px] xs, sm:mt-0 bg-black_code h-fit p-5 rounded-md mt-10 xs, sm:overflow-x-auto">
          <pre>
            <code className=" text-grey font-code_font"></code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayback;
