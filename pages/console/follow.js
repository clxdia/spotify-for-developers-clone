import React from "react";
import ConsoleCards from "../../components/ConsoleCards";
import Layout2 from "./layout";

const follow = () => {
  return (
    <Layout2>
      <ConsoleCards
        title={"Follow"}
        table={
          <>
            <tr className="text-left font-[300]">
              <td className="uppercase">delete</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/following
              </td>
              <td> Unfollow Artists or Users</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">delete</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/playlists/&#123;playlist_id&#125;/followers
              </td>
              <td>Unfollow Playlist</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/following/contains
              </td>
              <td>Check If User Follows Artists or Users</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/following
              </td>
              <td>Get Followed Artists</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/playlists/&#123;playlist_id&#125;/followers/contains
              </td>
              <td>Check if Users Follow Playlist</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">put</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/following
              </td>
              <td> Follow Artists or Users</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">put</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/playlists/&#123;playlist_id&#125;/followers
              </td>
              <td> Follow Playlist</td>
            </tr>
          </>
        }
      />
    </Layout2>
  );
};
export default follow;
