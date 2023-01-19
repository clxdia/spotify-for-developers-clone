import React from "react";
import ConsoleCards from "../../components/ConsoleCards";
import Layout2 from "./layout";

const search = () => {
  return (
    <Layout2>
      <ConsoleCards
        title={"Search"}
        table={
          <>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/search
              </td>
              <td>Search for Item</td>
            </tr>
          </>
        }
      />
    </Layout2>
  );
};
export default search;
