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
              <h2 className="font-circular_bold ">Dubolt</h2>
              <p>
                Create perfect playlists with the help of your favorite artists
                and genres.
              </p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase4.png')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Replayify</h2>
              <p>Replay your Spotify favorites!</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase5.png')] showcase-long">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Playlist Souffle</h2>
              <p>Playlist Souffle allows you to souffle up your playlists</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase6.png')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Spotify Audio Analysis</h2>
              <p>
                Visualise and interact with the musical structure of your songs
              </p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase7.png')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold "> Musicscape</h2>
              <p>Generates landscape art based on your recent listening</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase8.png')] showcase">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Noon Pacific</h2>
              <p>Curated mixtapes of the best handpicked new music</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase9.png')] showcase-long mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Popularity Contest</h2>
              <p>Guess which artist is more popular</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase10.png')] showcase">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">C - Listening Room</h2>
              <p>
                A listening room where multiple users can propose songs and vote
                for them
              </p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase11.jpg')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Mangomoji</h2>
              <p>Generate the perfect song using emojis.</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase12.png')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Klangspektrum</h2>
              <p>A window into musical taste of Spotify users.</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase13.png')] showcase">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Six Degrees of Kanye West</h2>
              <p>Find how close your favourite artist is from Kanye West!</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase14.png')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Klarafy</h2>
              <p>Klarafy translates your favorite music into classical music</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase15.jpg')] showcase-long">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Setify</h2>
              <p>Listen to your favourite gigs again (kinda)</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase16.jpg')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Playlist Manager</h2>
              <p>
                Playlist Manager helps users with many playlists to easily
                organize them.
              </p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase17.png')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Magic Playlist</h2>
              <p>
                Magic Playlist enables users to create a playlist based on a
                song
              </p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase18.png')] showcase ">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">
                Denied - Skip Terrible Music
              </h2>
              <p>Automatically skips songs that you dislike on Mac.</p>
            </Link>
          </div>
          <div className="bg-grey bg-[url('/showcase/showcase35.png')] showcase-long mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Spotify Dedup</h2>
              <p>Remove duplicate tracks from your playlists</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase20.png')] showcase">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Alfred Mini Player</h2>
              <p>Control your Spotify library at your fingertips with Alfred</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase21.png')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Shazam</h2>
              <p>Create and play Shazam playlists in Spotify</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase22.png')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Runkeeper</h2>
              <p>
                Listen to Spotify while using this popular exercise motivator.
              </p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase23.jpg')] showcase ">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Album Availability</h2>
              <p>Visualize album availability on Spotify.</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase24.jpg')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">3D Music Maze</h2>
              <p>A 3D music maze built with WebGL that runs in your browser.</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase25.jpg')] showcase-long">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Roadtrip Mixtape</h2>
              <p>An app to create road trip playlists.</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase26.jpg')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Music Popcorn</h2>
              <p>Explore and learn about many different music genres.</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase27.png')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Acrostify</h2>
              <p>Generate acrostic playlists with a secret message</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase33.svg')] showcase relative">
            <h2 className="font-circular_bold text-white absolute top-10 left-10">
              Boil The Frog
            </h2>
            <Link href="/" className="showcase-hover z-20">
              <h2 className="font-circular_bold ">Boil The Frog</h2>
              <p>Create a seamless playlist between any two artists</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase28.jpg')] showcase-long mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">MusiXmatch</h2>
              <p>The #1 Music Lyrics Player on Google Play Store.</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase34.svg')] showcase relative">
            <h2 className="font-circular_bold text-white absolute top-10 left-10 z-10">
              The Set Listener
            </h2>
            <Link href="/" className="showcase-hover z-50">
              <h2 className="font-circular_bold ">The Set Listener</h2>
              <p>
                Create a Spotify playlist based on an artist’s most recent show.
              </p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase31.jpg')] showcase mr-[3vw]">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Every Noise at Once</h2>
              <p>A listenable acoustic map for 1300+ genres of music.</p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase33.svg')] showcase mr-[3vw] relative">
            <h2 className="font-circular_bold text-white absolute top-10 left-10">
              Spotify Playlist Miner
            </h2>
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Spotify Playlist Miner</h2>
              <p>
                Build a new playlist based on the tastes of 100s of Spotify
                users!
              </p>
            </Link>
          </div>
          <div className="bg-[url('/showcase/showcase32.png')] showcase">
            <Link href="/" className="showcase-hover">
              <h2 className="font-circular_bold ">Spotify Thirtify</h2>
              <p>Our Web API demo player built on 30s previews.</p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default showcase;
