import Image from "next/image";
import Link from "next/link";
import React from "react";
import DiscoverApps from "../components/DiscoverApps";
import DiscoverCards from "../components/DiscoverCards";
import audio1 from "/public/discover/audio-4.png";
import audio2 from "/public/discover/audio-2.png";

const list1 = [];
list1.push(<li>Mood: Danceability, Valence, Energy, Tempo</li>);
list1.push(<li>Properties: Loudness, Speechiness, Instrumentalness</li>);
list1.push(<li>Context: Liveness, Acousticness</li>);
list1.push(<li>Segments, Tatums, Bars, Beats, Pitches, Timbre, and more</li>);

const discover = () => {
  return (
    <div>
      <div className="bg-discover bg-cover w-[100%] bg-center bg-no-repeat h-[80vh] justify-center flex flex-col text-white text-center">
        <h1 className="text-[96px] sm:text-[80px] xs:text-[56px] leading-tight font-circular_bold max-w-[80vw] m-auto mb-0">
          Discover Spotify’s Features
        </h1>
        <h3 className="max-w-[63vw] m-auto mt-4 text-[18px] leading-tight">
          With Spotify APIs and SDKs for JavaScript, iOS, and Android — learn
          how you can develop unique experiences for over 180 million global
          music fans in as little as a few lines of code.
        </h3>
      </div>
      <main className="flex">
        <aside className="bg-aside w-[300px] min-w-[300px] xs, sm:hidden">
          <ul className="text-[14px] p-7 pt-10 font-[500] flex flex-col gap-2">
            <li className="uppercase mb-1 font-[600]">Features</li>
            <li className="hover:text-greenify hover:transition hover:ease-in-out">
              <Link href={""}>Audio Features & Analysis</Link>
            </li>
            <li className="hover:text-greenify hover:transition hover:ease-in-out">
              <Link href={""}>Playback</Link>
            </li>
            <li className="hover:text-greenify hover:transition hover:ease-in-out">
              <Link href={""}>Recommendations</Link>
            </li>
            <li className="hover:text-greenify hover:transition hover:ease-in-out">
              <Link href={""}>Search</Link>
            </li>
            <li className="hover:text-greenify hover:transition hover:ease-in-out">
              <Link href={""}>Playlists</Link>
            </li>
            <li className="hover:text-greenify hover:transition hover:ease-in-out">
              <Link href={""}>Metadata</Link>
            </li>
            <li className="hover:text-greenify hover:transition hover:ease-in-out">
              <Link href={""}>Curated Content</Link>
            </li>
            <li className="hover:text-greenify hover:transition hover:ease-in-out">
              <Link href={""}>User Taste</Link>
            </li>
          </ul>
        </aside>
        <section className="p-[3rem]">
          <div className="flex gap-10">
            <DiscoverCards
              title={"Audio Features & Analysis"}
              subtitle={
                "Explore audio features and in-depth audio analysis of tracks"
              }
              bio={
                "With the Spotify Developer Platform, you’re able to read calculated audio features of tracks to learn about its danceability, energy, valence, and more. For more advanced use cases, it is possible to read in-depth analysis data about tracks such as the segments, tatums, bars, beats, pitches, and more."
              }
              list={list1}
              button={"read the docs"}
            />
            <DiscoverApps
              title={"Real apps that integrate audio features & analysis"}
              apps1={audio1}
              app1title={"Spotify Audio Analysis"}
              app1bio={"Get a fascinating visual insight into any track."}
              apps2={audio2}
              app2title={"Dubolt"}
              app2bio={
                "Do you want more danceable or less popular music? Tune your discovery by different audio features."
              }
            />
          </div>
          <div className="flex gap-10 mt-[5rem]">
            <DiscoverCards
              title={"Audio Features & Analysis"}
              subtitle={
                "Explore audio features and in-depth audio analysis of tracks"
              }
              bio={
                "With the Spotify Developer Platform, you’re able to read calculated audio features of tracks to learn about its danceability, energy, valence, and more. For more advanced use cases, it is possible to read in-depth analysis data about tracks such as the segments, tatums, bars, beats, pitches, and more."
              }
              list={list1}
              button={"read the docs"}
            />
            <DiscoverApps
              title={"Real apps that integrate audio features & analysis"}
              apps1={audio1}
              app1title={"Spotify Audio Analysis"}
              app1bio={"Get a fascinating visual insight into any track."}
              apps2={audio2}
              app2title={"Dubolt"}
              app2bio={
                "Do you want more danceable or less popular music? Tune your discovery by different audio features."
              }
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default discover;
