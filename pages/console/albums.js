import React from "react";
import ConsoleCards from "../../components/ConsoleCards";
import Layout2 from "./layout";

const albums = () => {
  return (
    <Layout2>
      <ConsoleCards
        title={"hi"}
        table={
          <tr className="text-left">
            <td>Delete</td>
            <td>v1/playlists/playlist_id/tracks</td>
            <td>Remove Playlist Items</td>
          </tr>
        }
      />
    </Layout2>
  );
};
export default albums;
