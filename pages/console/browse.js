import React from "react";
import ConsoleCards from "../../components/ConsoleCards";
import Layout2 from "./layout";

const browse = () => {
  return (
    <Layout2>
      <ConsoleCards
        title={"Browse"}
        table={
          <>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/recommendations/available-genre-seeds
              </td>
              <td> Get Available Genre Seeds</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/browse/categories
              </td>
              <td>Get Several Browse Categories</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/browse/categories/&#123;category_id&#125;
              </td>
              <td> Get Single Browse Category</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/browse/categories/&#123;category_id&#125;/playlists
              </td>
              <td> Get Category's Playlists</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/browse/featured-playlists
              </td>
              <td> Get Featured Playlists</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/browse/new-releases
              </td>
              <td> Get New Releases</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/recommendations
              </td>
              <td> Get Recommendations</td>
            </tr>
          </>
        }
      />
    </Layout2>
  );
};
export default browse;
