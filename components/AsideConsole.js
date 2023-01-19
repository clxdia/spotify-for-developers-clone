import Link from "next/link";
import React from "react";

const AsideConsole = () => {
  return (
    <aside className="bg-aside w-[300px] min-w-[300px] h-auto xs, sm2:hidden">
      <ul className="text-[14px] p-7 pt-10 font-[500] flex flex-col gap-2 sticky top-0">
        <li className="uppercase mb-1 font-[600]">console</li>
        <li className="hover:text-greenify hover:transition hover:ease-in-out">
          <Link href="/console/albums">Albums</Link>
        </li>
        <li className="hover:text-greenify hover:transition hover:ease-in-out">
          <Link href="/console/artists">Artists</Link>
        </li>
        <li className="hover:text-greenify hover:transition hover:ease-in-out">
          <Link href="/console/audiobooks">Audiobooks</Link>
        </li>
        <li className="hover:text-greenify hover:transition hover:ease-in-out">
          <Link href="/console/browse">Browse</Link>
        </li>
        <li className="hover:text-greenify hover:transition hover:ease-in-out">
          <Link href="/console/chapters">Chapters</Link>
        </li>
        <li className="hover:text-greenify hover:transition hover:ease-in-out">
          <Link href="/console/episodes">Episodes</Link>
        </li>
        <li className="hover:text-greenify hover:transition hover:ease-in-out">
          <Link href="/console/follow">Follow</Link>
        </li>
        <li className="hover:text-greenify hover:transition hover:ease-in-out">
          <Link href="/console/library">Library</Link>
        </li>
        <li className="hover:text-greenify hover:transition hover:ease-in-out">
          <Link href="/console/markets">Markets</Link>
        </li>
        <li className="hover:text-greenify hover:transition hover:ease-in-out">
          <Link href="/console/personalization">Personalization</Link>
        </li>
        <li className="hover:text-greenify hover:transition hover:ease-in-out">
          <Link href="/console/player">Player</Link>
        </li>
        <li className="hover:text-greenify hover:transition hover:ease-in-out">
          <Link href="/console/playlists">Playlists</Link>
        </li>
        <li className="hover:text-greenify hover:transition hover:ease-in-out">
          <Link href="/console/search">Search</Link>
        </li>
        <li className="hover:text-greenify hover:transition hover:ease-in-out">
          <Link href="/console/shows">Shows</Link>
        </li>
        <li className="hover:text-greenify hover:transition hover:ease-in-out">
          <Link href="/console/tracks">Tracks</Link>
        </li>
        <li className="hover:text-greenify hover:transition hover:ease-in-out">
          <Link href="/console/users-profile">Users Profile</Link>
        </li>
      </ul>
    </aside>
  );
};

export default AsideConsole;
