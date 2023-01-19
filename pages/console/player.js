import React from "react";
import ConsoleCards from "../../components/ConsoleCards";
import Layout2 from "./layout";

const player = () => {
  return (
    <Layout2>
      <ConsoleCards
        title={"Player"}
        table={
          <>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/player/queue
              </td>
              <td> Get the User's Queue</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/player/queue/recently-played
              </td>
              <td>Get Recently Played Tracks</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/player
              </td>
              <td>Get Playback State</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/player/devices
              </td>
              <td> Get Available Devices</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/player/currently-playing
              </td>
              <td> Get Currently Playing Track</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">post</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/player/next
              </td>
              <td> Skip To Next</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">post</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/player/previous
              </td>
              <td> Skip To Previous</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">post</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/player/queue
              </td>
              <td>Add Item to Playback Queue</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">put</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/player/pause
              </td>
              <td>Pause Playback</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">put</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/player/play
              </td>
              <td> Start/Resume Playback</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">put</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/player/repeat
              </td>
              <td> Set Repeat Mode</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">put</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/player/seek
              </td>
              <td> Seek To Position</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">put</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/player/shuffle
              </td>
              <td> Toggle Playback Shuffle</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">put</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/player
              </td>
              <td>Transfer Playback</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">put</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/player/volume
              </td>
              <td> Set Playback Volume</td>
            </tr>
          </>
        }
      />
    </Layout2>
  );
};
export default player;
