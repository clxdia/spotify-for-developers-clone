import React from "react";
import ConsoleCards from "../../components/ConsoleCards";
import Layout2 from "./layout";

const users_profile = () => {
  return (
    <Layout2>
      <ConsoleCards
        title={"Users Profile"}
        table={
          <>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/me
              </td>
              <td>Get Current User's Profile</td>
            </tr>
            <tr className="text-left font-[300]">
              <td className="uppercase">get</td>
              <td className="text-greenify hover:text-light_green cursor-pointer">
                /v1/users/&#123;users_id&#125;
              </td>
              <td> Get User's Profiles</td>
            </tr>
          </>
        }
      />
    </Layout2>
  );
};
export default users_profile;
