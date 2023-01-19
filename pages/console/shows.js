import React from "react";
import ConsoleCards from "../../components/ConsoleCards";
import Layout2 from "./layout";

const shows = () => {
  return (
    <Layout2>
      <ConsoleCards
        title={"Shows"}
        table={
          <>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/shows
              </td>
              <td> Get Several Shows</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/shows/&#123;id&#125;/episodes
              </td>
              <td> Get Show Episodes</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/shows/&#123;id&#125;
              </td>
              <td>Get Show</td>
            </tr>
          </>
        }
      />
    </Layout2>
  );
};
export default shows;
