import Link from "next/link";
import React from "react";

import AppsCards from "../components/AppsCards";
import DiscoverCards from "../components/DiscoverCards";

import audio1 from "/public/discover/audio-4.png";
import audio2 from "/public/discover/audio-2.png";

import playback1 from "/public/discover/playback-1.png";
import playback2 from "/public/discover/playback-2.png";
import playback3 from "/public/discover/playback-3.png";

import recs1 from "/public/discover/recs-1.png";
import recs2 from "/public/discover/recs-2.png";

import search1 from "/public/discover/search-1.png";
import search2 from "/public/discover/search-2.png";

import playlist1 from "/public/discover/playlist-1.png";
import playlist2 from "/public/discover/playlist-2.jpg";
import playlist3 from "/public/discover/playlist-3.png";

import metadata1 from "/public/discover/metadata-1.jpg";
import metadata2 from "/public/discover/metadata-2.png";

import curated1 from "/public/discover/curated-1.png";
import curated2 from "/public/discover/curated-2.png";

import user1 from "/public/discover/user-1.png";
import user2 from "/public/discover/user-2.png";

const list1 = [];
list1.push(<li>Mood: Danceability, Valence, Energy, Tempo</li>);
list1.push(<li>Properties: Loudness, Speechiness, Instrumentalness</li>);
list1.push(<li>Context: Liveness, Acousticness</li>);
list1.push(<li>Segments, Tatums, Bars, Beats, Pitches, Timbre, and more</li>);

const list2 = [];
list2.push(
  <li>Play music directly in the web browser, with the Web Playback SDK</li>
);
list2.push(
  <li>
    Use Spotify Connect to control and transfer playback between any of a user’s
    active devices seamlessly.
  </li>
);
list2.push(
  <li>
    With just a few lines of code, embed play widgets with Spotify’s look and
    feel
  </li>
);

const list3 = [];
list3.push(<li>Get available genre seeds for recommendations</li>);
list3.push(<li>Get recommendations based on specific controls</li>);

const list4 = [];
list4.push(<li>Search based on user’s market</li>);
list4.push(<li>Search based on any market</li>);
list4.push(<li>Search up to 10,000 results</li>);

const list5 = [];
list5.push(
  <li>
    Read User and Public Playlists, such as Discover Weekly and Release Radar
  </li>
);
list5.push(
  <li>
    Read, Modify and Upload a Custom Cover for a User’s Public & Private
    Playlists
  </li>
);
list5.push(<li>Add, Remove, and Reorder Tracks in a Playlist</li>);

const list6 = [];
list6.push(<li>Read metadata information about tracks, artists, or albums</li>);
list6.push(
  <li>Read algorithmically related artists to a particular artist</li>
);
list6.push(<li>Play 30 second clip of available tracks</li>);
list6.push(<li>Read popularity explicit rating of tracks</li>);
list6.push(
  <li>Read the International Standard Recording Code (ISRC) of any track</li>
);
list6.push(
  <li>Receive responses based on user’s market, or a specific market</li>
);

const list7 = [];
list7.push(<li>List of Featured Playlists</li>);
list7.push(<li>List of Featured New Releases</li>);
list7.push(<li>Browse Categories and their Playlists</li>);

const list8 = [];
list8.push(<li>Read user’s top tracks and artists</li>);
list8.push(<li>Read user’s recently played tracks (up to 50)</li>);
list8.push(<li>Save and unsave tracks and albums</li>);

const discover = () => {
  return (
    <div className="">
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
      <main className="flex relative">
        <aside className="bg-aside w-[300px] min-w-[300px] h-auto xs, sm2:hidden">
          <ul className="text-[14px] p-7 pt-10 font-[500] flex flex-col gap-2 sticky top-0">
            <li className="uppercase mb-1 font-[600]">Features</li>
            <li className="hover:text-greenify hover:transition hover:ease-in-out">
              <Link href="#audio">Audio Features & Analysis</Link>
            </li>
            <li className="hover:text-greenify hover:transition hover:ease-in-out">
              <Link href="#playback">Playback</Link>
            </li>
            <li className="hover:text-greenify hover:transition hover:ease-in-out">
              <Link href="#recommendations">Recommendations</Link>
            </li>
            <li className="hover:text-greenify hover:transition hover:ease-in-out">
              <Link href="#search">Search</Link>
            </li>
            <li className="hover:text-greenify hover:transition hover:ease-in-out">
              <Link href="#playlists">Playlists</Link>
            </li>
            <li className="hover:text-greenify hover:transition hover:ease-in-out">
              <Link href="#metadata">Metadata</Link>
            </li>
            <li className="hover:text-greenify hover:transition hover:ease-in-out">
              <Link href="#curated-content">Curated Content</Link>
            </li>
            <li className="hover:text-greenify hover:transition hover:ease-in-out">
              <Link href="#user-taste">User Taste</Link>
            </li>
          </ul>
        </aside>
        <section className="p-[3rem]">
          <div className="flex sm:flex-col gap-10 pt-5" id="audio">
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
            <div className="w-[50%] sm:w-[100%]">
              <h4 className="font-semibold">
                Real apps that integrate audio features & analysis
              </h4>
              <AppsCards
                apptitle={"Spotify Audio Analysis"}
                appicon={audio1}
                appbio={"Get a fascinating visual insight into any track."}
              />
              <AppsCards
                apptitle={"Dubolt"}
                appicon={audio2}
                appbio={
                  "Do you want more danceable or less popular music? Tune your discovery by different audio features."
                }
              />
            </div>
          </div>
          <div className="flex sm:flex-col gap-10 mt-[5rem] pt-5" id="playback">
            <DiscoverCards
              title={"Playback"}
              subtitle={"Bring music from Spotify to your application"}
              bio={
                "We offer multiple, fully featured playback solutions depending on your needs"
              }
              list={list2}
              button={"get started on web"}
            />
            <div className="w-[50%] sm:w-[100%]">
              <h4 className="font-semibold">
                Real apps that integrate playback
              </h4>
              <AppsCards
                apptitle={"Noon Pacific"}
                appicon={playback1}
                appbio={
                  "This iPhone app provides curated mixtapes with a sleek UI and playback powered by Spotify."
                }
              />
              <AppsCards
                apptitle={"C - Listening Room"}
                appicon={playback2}
                appbio={
                  "Multiple users can propose and vote for songs, and then play them in a synchronised way through Spotify."
                }
              />
              <AppsCards
                apptitle={"Runkeeper"}
                appicon={playback3}
                appbio={
                  "With this app, you can listen to all your Spotify music on the run, while keeping track of your workout."
                }
              />
            </div>
          </div>
          <div
            className="flex gap-10 sm:flex-col mt-[5rem] pt-5"
            id="recommendations"
          >
            <DiscoverCards
              title={"Recommendations"}
              subtitle={
                "Customize and serve Spotify’s powerful recommendations to your users"
              }
              bio={
                "With specific controls - such as market, seeds (artists, genres, tracks), ranged audio features (danceability, valence, tempo, liveness, etc) and popularity, you can generate very specific recommendations based on Spotify’s powerful and industry-leading algorithms."
              }
              list={list3}
              button={"read the docs"}
            />
            <div className="w-[50%] sm:w-[100%]">
              <h4 className="font-semibold">
                Real apps that integrate recommendations
              </h4>
              <AppsCards
                apptitle={"Magic Playlist"}
                appicon={recs1}
                appbio={
                  "Helps users make playlsits based on songs. The app surfaces users' top tracks on its home page."
                }
              />
              <AppsCards
                apptitle={"Klarafy"}
                appicon={recs2}
                appbio={
                  "This app uses track metadata on playlists to recommend classical musical that you might like."
                }
              />
            </div>
          </div>
          <div className="flex gap-10 sm:flex-col mt-[5rem] pt-5" id="search">
            <DiscoverCards
              title={"Search"}
              subtitle={"Find any track, artist, album or playlist on Spotify"}
              bio={
                "Search and get information about any artist, album, track, or playlist on Spotify based on a search query."
              }
              list={list4}
              button={"read the docs"}
            />
            <div className="w-[50%] sm:w-[100%]">
              <h4 className="font-semibold">Real apps that integrate search</h4>
              <AppsCards
                apptitle={"Record Player"}
                appicon={search1}
                appbio={
                  "Record Player is an internet Rube Goldberg Machine that combines the Google Cloud Vision API and the Spotify API to play albums based on a picture of the album cover."
                }
              />
              <AppsCards
                apptitle={"Six Degrees of Kanye West"}
                appicon={search2}
                appbio={
                  "Similar to Artist Explorer, but with a Kanye laser focus. This app will tell you how closely connected your artist is to Kanye West, based on artist collaboration."
                }
              />
            </div>
          </div>
          <div
            className="flex gap-10 sm:flex-col mt-[5rem] pt-5"
            id="playlists"
          >
            <DiscoverCards
              title={"Playlists"}
              subtitle={
                "Manage Spotify users’ playlists directly from your application"
              }
              bio={
                "Create, modify, view, delete, and set custom covers for your user’s playlists."
              }
              list={list5}
              button={"read the docs"}
            />
            <div className="w-[50%] sm:w-[100%]">
              <h4 className="font-semibold">
                Real apps that integrate playlists
              </h4>
              <AppsCards
                apptitle={"Discover Quickly"}
                appicon={playlist1}
                appbio={
                  "An interface for music discovery. Quickly scan through songs and save them for later listening."
                }
              />
              <AppsCards
                apptitle={"Setify"}
                appicon={playlist2}
                appbio={
                  "Relive a concert--or prepare for an upcoming one--by creating a playlist of a specific concert's setlist."
                }
              />
              <AppsCards
                apptitle={"Playlist Souffle"}
                appicon={playlist3}
                appbio={
                  "Get deeper in an artist's catalog: this app takes a playlist and replaces each song by another one by that artist."
                }
              />
            </div>
          </div>
          <div className="flex gap-10 sm:flex-col mt-[5rem] pt-5" id="metadata">
            <DiscoverCards
              title={"Metadata"}
              subtitle={"Access information about any track, artist or album"}
              bio={
                "Discover the millions of tracks, artists, or albums on Spotify in the user’s local market or a specific Spotify market."
              }
              list={list6}
              button={"read the docs"}
            />
            <div className="w-[50%] sm:w-[100%]">
              <h4 className="font-semibold">
                Real apps that integrate metadata
              </h4>
              <AppsCards
                apptitle={"Every Noise at Once"}
                appicon={metadata1}
                appbio={
                  "Explore over 1300 microgenres of music, and listen to 30 second clips of representative tracks"
                }
              />
              <AppsCards
                apptitle={"Popularity Contest"}
                appicon={metadata2}
                appbio={
                  "See if you can tell which of two artists is currently hotter on Spotify."
                }
              />
            </div>
          </div>

          <div
            className="flex gap-10 sm:flex-col mt-[5rem] pt-5"
            id="curated-content"
          >
            <DiscoverCards
              title={"Curated Content"}
              subtitle={
                "Get market-specific featured playlists and new releases from Spotify"
              }
              bio={
                "Read featured new releases and curated playlists created by Spotify’s editorial team, based on popularity, mood, international events, and genres."
              }
              list={list7}
              button={"read the docs"}
            />
            <div className="w-[50%] sm:w-[100%]">
              <h4 className="font-semibold">
                Real apps that integrate curated content
              </h4>
              <AppsCards
                apptitle={"Thirtify"}
                appicon={curated1}
                appbio={
                  "This app shows how you can recreate much functionality from the core Spotify client, and recreates browse functionality."
                }
              />
              <AppsCards
                apptitle={"Alfred Mini Player"}
                appicon={curated2}
                appbio={
                  "Quickly navigate the functionality of the Spotify app on a Mac with the keyboard shortcuts."
                }
              />
            </div>
          </div>
          <div
            className="flex gap-10 sm:flex-col mt-[5rem] pt-5"
            id="user-taste"
          >
            <DiscoverCards
              title={"User Taste"}
              subtitle={
                "Read more about the user’s listening tastes on Spotify"
              }
              bio={
                "Learn more about what a user’s recently played and most listened to tracks and artists. And allow users to save and unsave tracks and albums, as well as follow and unfollow artists."
              }
              list={list8}
              button={"read the docs"}
            />
            <div className="w-[50%] sm:w-[100%]">
              <h4 className="font-semibold">
                Real apps that integrate user taste
              </h4>
              <AppsCards
                apptitle={"MusicScape"}
                appicon={user1}
                appbio={
                  "A beautiful interface to view your top tracks and artists."
                }
              />
              <AppsCards
                apptitle={"Replayfy"}
                appicon={user2}
                appbio={
                  "A beautiful interface to view your top tracks and artists."
                }
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default discover;
