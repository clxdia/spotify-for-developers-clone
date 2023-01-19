import React from "react";
import ConsoleCards from "../../components/ConsoleCards";
import Layout2 from "./layout";

const library = () => {
  return (
    <Layout2>
      <ConsoleCards
        title={"Library"}
        table={
          <>
            <tr className="text-left font-[300]">
              <td className="uppercase">delete</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/albums
              </td>
              <td>Remove Users&#39; Saved Albums</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">delete</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/audiobooks
              </td>
              <td>Remove User&#39;s Saved Audiobooks</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">delete</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/episodes
              </td>
              <td> Remove User&#39;s Saved Episodes</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">delete</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/shows
              </td>
              <td>Remove User&#39;s Saved Shows</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">delete</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/tracks
              </td>
              <td> Remove User&#39;s Saved Tracks</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/albums/contains
              </td>
              <td> Check User&#39;s Saved Albums</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/audiobooks/contains
              </td>
              <td>Check User&#39;s Saved Audiobooks</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/episodes/contains
              </td>
              <td>Check User&#39;s Saved Episodes</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/shows/contains
              </td>
              <td> Check User&#39;s Saved Shows</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/tracks/contains
              </td>
              <td>Check User&#39;s Saved Tracks</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/albums
              </td>
              <td>Get User&#39;s Saved Albums</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/audiobooks
              </td>
              <td>Get User&#39;s Saved Audiobooks</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/episodes
              </td>
              <td>Get User&#39;s Saved Episodes</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/shows
              </td>
              <td>Get User&#39;s Saved Shows</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/tracks
              </td>
              <td> Get User&#39;s Saved Tracks</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">put</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/albums
              </td>
              <td> Save Albums for Current User</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">put</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/audiobooks
              </td>
              <td> Save Audiobooks for Current User</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">put</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/episodes
              </td>
              <td>Save Episodes for Current User</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">put</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/shows
              </td>
              <td> Save Shows for Current User</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">put</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/tracks
              </td>
              <td> Save Tracks for Current User</td>
            </tr>
          </>
        }
      />
    </Layout2>
  );
};
export default library;
