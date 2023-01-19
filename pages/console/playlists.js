import React from "react";
import ConsoleCards from "../../components/ConsoleCards";
import Layout2 from "./layout";

const playlists = () => {
  return (
    <Layout2>
      <ConsoleCards
        title={"Playlists"}
        table={
          <>
            <tr className="text-left font-[300]">
              <td className="uppercase">delete</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/playlists/&#123;playlist_id&#125;/tracks
              </td>
              <td>Remove Playlist Items</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/playlists
              </td>
              <td>Get Current User&#39;s Playlists</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/playlists/&#123;playlist_id&#125;/images
              </td>
              <td>Get Playlist Cover Image</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/playlists/&#123;playlist_id&#125;/tracks
              </td>
              <td>Get Playlist Items</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/playlists/&#123;playlist_id&#125;
              </td>
              <td> Get Playlist</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/users/&#123;user_id&#125;/playlists
              </td>
              <td> Get User&#39;s Playlists</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">post</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/users/&#123;playlist_id&#125;/tracks
              </td>
              <td>Add Items to Playlist</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">post</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/users/&#123;user_id&#125;/playlists
              </td>
              <td>Create Playlist</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">put</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/playlists/&#123;playlist_id&#125;/images
              </td>
              <td>Add Custom Playlist Cover Image</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">put</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/playlists/&#123;playlist_id&#125;/tracks
              </td>
              <td> Update Playlist Items</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">put</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/playlists/&#123;playlist_id&#125;
              </td>
              <td> Change Playlist Details</td>
            </tr>
          </>
        }
      />
    </Layout2>
  );
};
export default playlists;
