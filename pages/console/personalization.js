import React from "react";
import ConsoleCards from "../../components/ConsoleCards";
import Layout2 from "./layout";

const personalization = () => {
  return (
    <Layout2>
      <ConsoleCards
        title={"Personalization"}
        table={
          <>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me/top/&#123;type&#125;
              </td>
              <td> Get User&#39;s Top Items</td>
            </tr>
          </>
        }
      />
    </Layout2>
  );
};
export default personalization;
