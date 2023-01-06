import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="p-6 font-[200] w-[100%] ml-10 text-[14px]">
      <ul className="uppercase flex justify-start gap-[4rem] font-circular_light">
        <li className="hover:text-greenify hover:transition hover:ease-in-out">
          <Link href="/discover">discover</Link>
        </li>
        <li className="hover:text-greenify hover:transition hover:ease-in-out">
          <Link href="/community">community</Link>
        </li>
        <li className="hover:text-greenify hover:transition hover:ease-in-out">
          <Link href="/dashboard">dashboard</Link>
        </li>
        <li className="hover:text-greenify hover:transition hover:ease-in-out">
          <Link href="/use-cases">use cases</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
