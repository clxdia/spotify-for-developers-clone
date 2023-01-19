import React from "react";
import ConsoleCards from "../../components/ConsoleCards";
import Layout2 from "./layout";

const artists = () => {
  return (
    <Layout2>
      <ConsoleCards
        title={"Artists"}
        table={
          <>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/artists/&#123;id&#125;/albums
              </td>
              <td> Get Artist&#39;s Albums</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/artists/&#123;id&#125;/related-artists
              </td>
              <td> Get Artist&#39;s Related Artists</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/artists/&#123;id&#125;/top-tracks
              </td>
              <td> Get Artist&#39;s Top Tracks</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/artists/&#123;id&#125;
              </td>
              <td> Get Artist</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/artists/
              </td>
              <td> Get Several Artists</td>
            </tr>
          </>
        }
      />
    </Layout2>
  );
};
export default artists;
