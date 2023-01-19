import Link from "next/link";
import React from "react";

const AsideConsole = () => {
  return (
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
  );
};

export default AsideConsole;
