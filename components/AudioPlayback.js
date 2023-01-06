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
            <code className=" text-grey font-code_font">
              <code className=" text-grey font-code_font">
                <span className="text-white">&#60;</span>
                script src
                <span className="text-white">=</span>
                <span className="text-green_code">
                  "https://sdk.scdn.co/spotify-player.js"
                </span>
                <span className="text-white">&#62;&#60;/</span>
                script
                <span className="text-white">&#62;</span>
                <br></br>
                <span className="text-white">&#60;</span>
                script
                <span className="text-white">&#62;</span>
                <br></br>
                window
                <span className="text-white">.</span>
                <span className="text-yellow_code">
                  onSpotifyWebPlaybackSDKReady
                </span>
                <span className="text-white">= () =&#62; &#123;</span>
                <br></br>
                <span className="pl-5 text-blue_code">const </span>
                userAccessToken
                <span className="text-white">=</span>
                <span className="text-green_code">"[access token]"</span>
                <span className="text-white">;</span>
                <br></br>
                <span className="pl-5 text-blue_code">const </span>
                webPlayback
                <span className="text-white">=</span>
                <span className="text-blue_code">new</span>
                <span className="text-yellow_code">Spotify.Player</span>
                <span className="text-white">(&#123;</span>
                <br></br>
                <span className="pl-10">name</span>
                <span className="text-white">: </span>
                <span className="text-green_code">
                  "Spotify Web Playback SDK"
                </span>
                <span className="text-white">,</span>
                <br></br>
                <span className="text-yellow_code ml-10">getOAuthToken</span>
                <span className="text-white">: </span>
                callback
                <span className="text-white"> =&#62; &#123; </span>
                <span className="text-yellow_code">callback</span>
                <span className="text-white">(</span>
                userAccessToken
                <span className="text-white">)&#125;</span>
                <br></br>
                <span className="text-white ml-5">&#125;);</span>
                <br></br>
                <span className="ml-5">webPlayback</span>
                <span className="text-white">.</span>
                <span className="text-yellow_code">connect</span>
                <span className="text-white">();</span>
                <br></br>
                <span className="text-white">&#125;;</span>
                <br></br>
                <span className="text-white">&#60;/</span>
                script
                <span className="text-white">&#62;</span>
              </code>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayback;
