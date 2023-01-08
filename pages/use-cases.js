import Link from "next/link";
import React from "react";

const useCases = () => {
  return (
    <div>
      <div className="flex xs, sm:hidden">
        <div className="h-[0.9rem] w-[300px] min-w-[300px] bg-greenify"></div>
        <div className="h-[0.9rem] bg-black_code w-[100%]"></div>
      </div>
      <main className="flex">
        <aside className="bg-aside w-[300px] min-w-[300px] xs, sm:hidden"></aside>
        <section className="bg-white p-[3rem] xs, sm:p-[2rem] max-w-[1000px] font-circular_light">
          <div>
            <h1 className="font-circular_bold mb-2">Use Cases</h1>
            <p>
              Use Cases presents some common scenarios that Spotify has
              identified as good opportunities to integrate our music experience
              with to provide user value. These documents try to provide all the
              necessary information to get you started.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="font-circular_bold mb-2">Mobile Apps Use Cases</h2>
            <ul className="marker:text-black list-disc list-inside ml-6 text-black">
              <li className="hover:text-link text-greenify hover:transition hover:ease-in-out">
                <Link href="/messaging">Messaging</Link>
              </li>
              <li className="hover:text-link text-greenify hover:transition hover:ease-in-out">
                <Link href="/connection-flow">Connection Flow</Link>
              </li>
              <li className="hover:text-link text-greenify hover:transition hover:ease-in-out">
                <Link href="/content-recs">Content Recommendations</Link>
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <h2 className=" font-circular_bold mb-2">Hardware Use Cases</h2>
            <p>
              If you want to become a{" "}
              <b className="font-[800] font-sans">Spotify Hardware Partner</b>,
              select the use case that best fits your integration request.
            </p>
          </div>
          <div className="mt-[3rem]">
            <Link href="home-audio">
              <h3 className=" hover:text-link text-greenify hover:transition hover:ease-in-out font-circular_bold mb-2">
                Home Audio
              </h3>
            </Link>
            <p>
              The Spotify Connect feature allows the Spotify app to act as a
              remote control for home audio devices. The Spotify Embedded SDK
              makes it easy to add Spotify Connect functionality to a home audio
              device.
            </p>
          </div>
          <div className="mt-[3rem]">
            <Link href="voice-integrations">
              <h3 className=" hover:text-link text-greenify hover:transition hover:ease-in-out font-circular_bold mb-2">
                Voice Integrations
              </h3>
            </Link>
            <p>
              Spotify now offers an immersive voice controlled experience on all
              major platforms. Go here if you want to unlock the Spotify voice
              experience on your device.
            </p>
          </div>
          <div className="mt-[3rem]">
            <Link href="new-emerging">
              <h3 className=" hover:text-link text-greenify hover:transition hover:ease-in-out font-circular_bold mb-2">
                New & Emerging
              </h3>
            </Link>
            <p>
              We love it when you innovate and are excited to see what you
              build. Please get in touch and tell us what you’re up to.
            </p>
          </div>
          <div className="mt-[3rem] mb-[3.5rem]">
            <Link href="wearables">
              <h3 className=" hover:text-link text-greenify hover:transition hover:ease-in-out font-circular_bold mb-2">
                Wearables
              </h3>
            </Link>
            <p>
              We are focused on devices that can create unique and personalized
              music experiences for smartwatches, health and fitness wristbands,
              and headphones.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default useCases;
