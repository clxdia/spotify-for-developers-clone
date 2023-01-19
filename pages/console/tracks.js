import React from "react";
import ConsoleCards from "../../components/ConsoleCards";
import Layout2 from "./layout";

const tracks = () => {
  return (
    <Layout2>
      <ConsoleCards
        title={"Tracks"}
        table={
          <>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/audio-analysis/&#123;id&#125;
              </td>
              <td>Get Track's Audio Analysis</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/audio-features
              </td>
              <td>Get Tracks' Audio Features</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/audio-features/&#123;id&#125;
              </td>
              <td>Get Track's Audio Features</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/tracks
              </td>
              <td>Get Several Tracks</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/tracks/&#123;id&#125;
              </td>
              <td> Get Track</td>
            </tr>
          </>
        }
      />
    </Layout2>
  );
};
export default tracks;
