import Link from "next/link";
import React from "react";

const dashboard = () => {
  return (
    <div>
      <div className="bg-dashboard bg-cover h-[400px] w-[100%] m-auto flex items-center">
        <h1 className="xs:p-5 xs:w-[100%] text-[80px] w-[750px] m-auto text-white xs:text-[56px] leading-tight font-circular_bold xs:ml-0 ml-[16vw] sm:ml-[4vw] xs:max-w-[90%] xs:m-auto ">
          Your Dashboard
        </h1>
      </div>
      <main className="xs:p-5 xs:w-[100%] sm, w-[700px] m-auto xs:ml-0 sm:ml-[4vw] ml-[16vw] pt-10 pb-10">
        <h1 className="font-circular_bold">
          Create & manage your Spotify integrations.
        </h1>
        <p>
          Meet your dashboard. Log in to create new integrations and manage your
          Spotify credentials. Just connect Spotify Developer to your Spotify
          account.
        </p>
        <div className="flex xs, sm:flex-col xs, sm:items-start items-center mt-10 gap-4">
          <button className="bg-greenify w-fit text-[14px] text-white p-2 pl-14 pr-14 rounded-[50px] uppercase font-bold tracking-widest hover:bg-link hover:ease-in-out">
            log in
          </button>
          <p>
            Don't have an account?{" "}
            <Link className="text-greenify hover:text-light_green" href="/">
              Sign up for a free Spotify account here.
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default dashboard;
