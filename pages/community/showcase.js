import Link from "next/link";
import React from "react";

const showcase = () => {
  return (
    <div className="w-[100%]">
      <div className="flex xs, sm:hidden text-white tracking-wide">
        <div className="h-[2rem] w-[300px] min-w-[300px] bg-greenify flex pl-5 items-center">
          <p className="text-[15px] font-normal">SHOWCASE</p>
        </div>
        <div className="h-[2rem] bg-black_code w-[100%] flex gap-10 pl-5 items-center">
          <Link href="/community/news" className="text-[14px]">
            NEWS
          </Link>
          <Link
            href="https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer"
            className="text-[14px]"
          >
            FORUM
          </Link>
          <Link href="/community/showcase" className="text-[14px]">
            SHOWCASE
          </Link>
        </div>
      </div>
      <main className=" mt-10 flex flex-col gap-9 mb-24 w-[85%] m-auto">
        <h1 className="font-circular_bold text-[80px] sm:text-[48px]">
          Developer Showcase{" "}
        </h1>
        <p className="w-[33%] sm:w-[100%]">
          Looking for inspiration? Take a look at these outstanding apps, all
          built using our APIs, SDKs and other developer tools.{" "}
        </p>
        <section className="showcase-container">
          <div className="bg-[url('/showcase/showcase1.png')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Discover Quickly</h2>
              <p>An interface for music discovery.</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase2.png')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase3.png')] showcase">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase4.png')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase5.png')] showcase-long">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase6.png')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase7.png')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase8.png')] showcase">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase9.png')] showcase-long mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase10.png')] showcase">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase11.jpg')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase12.png')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase13.png')] showcase">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase14.png')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase15.jpg')] showcase-long">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase16.jpg')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase17.png')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase18.png')] showcase ">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-grey showcase-long mr-[3vw] ">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase20.png')] showcase">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase21.png')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase22.png')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase23.jpg')] showcase ">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase24.jpg')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase25.jpg')] showcase-long">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase26.jpg')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase27.png')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase33.svg')] showcase ">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase28.jpg')] showcase-long mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase34.svg')] showcase">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase31.jpg')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase33.svg')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase32.png')] showcase">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Record Player</h2>
              <p>Search Spotify using an image of an album cover</p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default showcase;
