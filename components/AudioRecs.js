import React from "react";

const AudioRecs = () => {
  return (
    <div className=" xs:w-[90%] w-[90%] sm:w-[80%] h-auto m-auto gap-10 ">
      <h1 className="font-extrabold sm, text-[24px] xs:text-[18px]">
        Customize and serve Spotify&apos;s powerful recommendations to your
        users
      </h1>
      <div className="flex xs, sm:flex-col gap-10 xs, sm:gap-2">
        <div className="w-[50%] xs, sm:w-[100%]">
          <p className="font-extralight mt-5 mb-5 text-[16px] xs, sm:text-[15px]">
            With specific controls—such as market, seeds &#40; artists, genres,
            tracks&#41;, ranged audio features &#40;danceability, valence,
            tempo, liveness, etc&#41; and popularity, you can generate music
            recommendations based on Spotify&apos;s powerful and
            industry-leading algorithms.
          </p>
        </div>
        <div className="text-[17px] overflow-hidden xs, sm:w-[100%] mt-10 w-[50%] xs, sm:mt-0 bg-black_code h-fit p-3 rounded-md overflow-x-auto leading-tight">
          <pre>
            <code className=" text-grey font-code_font">
              <span className=" text-blue_code">const </span>
              endpoint
              <span className="text-white"> = </span>
              <span className="text-green_code">
                &#34;https://api.spotify.com/v1/recommendations&#34;
              </span>
              <span className="text-white">;</span>
              <br></br>
              <span className=" text-blue_code">const </span>
              artists
              <span className="text-white"> = </span>
              <span className="text-green_code">
                &#39;6sFIWsNpZYqfjUpaCgueju&#39;
              </span>
              <span className="text-white">;</span>
              <br></br>
              <span className=" text-blue_code">const </span>
              danceability
              <span className="text-white"> = </span>
              <span className="text-yellow_code">encodeURIComponent</span>
              <span className="text-white">&#40;</span>
              <span className="text-green_code">&#39;0.9&#39;</span>
              <span className="text-white">&#41;</span>
              <span className="text-white">;</span>
              <br></br>
              <br></br>
              <span className="text-yellow_code">fetch</span>
              <span className="text-white">&#40;</span>
              <span className="text-green_code">&#96;</span>
              <span className="text-white">$&#123;</span>
              endpoint
              <span className="text-white">&#125;</span>
              <span className="text-green_code">?seed_artists=</span>
              <span className="text-white">$&#123;</span>
              artists
              <span className="text-white">&#125;</span>
              <span className="text-green_code">&target_danceability=</span>
              <span className="text-white">$&#123;</span>
              danceability
              <span className="text-white">&#125;</span>
              <span className="text-green_code">&#96;</span>
              <span className="text-white">, </span>
              <span className="text-white">$&#123;</span>
              <br></br>
              <span className="pl-5">method</span>
              <span className="text-white">: </span>
              <span className="text-green_code">&#34;GET&#34;</span>
              <span className="text-white">,</span>
              <br></br>
              <span className="pl-5">headers</span>
              <span className="text-white">: </span>
              <span className="text-white">&#123;</span>
              <br></br>
              <span className="pl-10">Authorization</span>
              <span className="text-white">: </span>
              <span className="text-green_code">&#96;Bearer </span>
              <span className="text-white">$&#123;</span>
              userAccessToken
              <span className="text-white">&#125;</span>
              <span className="text-green_code">&#96;</span>
              <br></br>
              <span className="pl-5 text-white">&#125;</span>
              <br></br>
              <span className=" text-white">&#125;</span>
              <span className=" text-white">&#41;</span>
              <br></br>
              <span className="text-white">.</span>
              <span className="text-yellow_code">then</span>
              <span className="text-white">&#40;</span>
              response
              <span className="text-white"> =&#62; </span>
              response
              <span className="text-white">.</span>
              <span className="text-yellow_code">json</span>
              <span className="text-white">()&#41;</span>
              <br></br>
              <span className="text-white">.</span>
              <span className="text-yellow_code">then</span>
              <span className="text-white">&#40;&#40;&#123;</span>
              tracks
              <span className="text-white">&#125;&#41; </span>
              <span className="text-white"> =&#62; </span>
              <span className="text-white">&#123;</span>
              <br></br>
              <span className="pl-5">tracks</span>
              <span className="text-white">.</span>
              <span className="text-yellow_code">forEach</span>
              <span className="text-white">&#40;</span>
              item
              <span className="text-white"> =&#62; </span>
              <span className="text-white">&#123;</span>
              <br></br>
              <span className="pl-8">console</span>
              <span className="text-white">.</span>
              <span className="text-yellow_code">log</span>
              <span className="text-white">&#40;</span>
              <span className="text-green_code">&#96;</span>
              <span className="text-white">$&#123;</span>
              item
              <span className="text-white">.</span>
              name
              <span className="text-white">&#125;</span>
              <span className="text-green_code"> by </span>
              <span className="text-white">$&#123;</span>
              item
              <span className="text-white">.</span>
              artists
              <span className="text-white">&#91;</span>
              <span className="text-[#ae81ff]">0</span>
              <span className="text-white">&#93;.</span>
              name
              <span className="text-white">&#125;</span>
              <span className="text-green_code">&#96;</span>
              <span className="text-white">&#41;.</span>
              <br></br>
              <span className="pl-5 text-white">&#125;&#41;</span>
              <br></br>
              <span className="text-white">&#125;&#41;</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default AudioRecs;
