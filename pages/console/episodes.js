import React from "react";
import ConsoleCards from "../../components/ConsoleCards";
import Layout2 from "./layout";

const episodes = () => {
  return (
    <Layout2>
      <ConsoleCards
        title={"Episodes"}
        table={
          <>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/episodes/&#123;id&#125;
              </td>
              <td> Get Episode</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/episodes
              </td>
              <td> Get Several Episodes</td>
            </tr>
          </>
        }
      />
    </Layout2>
  );
};
export default episodes;
