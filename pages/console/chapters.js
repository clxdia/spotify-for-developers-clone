import React from "react";
import ConsoleCards from "../../components/ConsoleCards";
import Layout2 from "./layout";

const chapters = () => {
  return (
    <Layout2>
      <ConsoleCards
        title={"Chapters"}
        table={
          <>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/chapters/&#123;id&#125;
              </td>
              <td> Get a Chapter</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/chapters
              </td>
              <td> Get Several Chapters</td>
            </tr>
          </>
        }
      />
    </Layout2>
  );
};
export default chapters;
