import React from "react";
import ConsoleCards from "../../components/ConsoleCards";
import Layout2 from "./layout";

const markets = () => {
  return (
    <Layout2>
      <ConsoleCards
        title={"Markets"}
        table={
          <>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/markets
              </td>
              <td>Get Available Markets</td>
            </tr>
          </>
        }
      />
    </Layout2>
  );
};
export default markets;
