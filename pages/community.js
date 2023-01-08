import React from "react";

const community = () => {
  return (
    <div>
      <div className="flex xs, sm:hidden">
        <div className="h-[0.9rem] w-[300px] min-w-[300px] bg-greenify"></div>
        <div className="h-[0.9rem] bg-black_code w-[100%]"></div>
      </div>
      <div className="bg-community max-h-[350px] bg-cover w-[100%] flex items-center">
        <h1 className="text-[96px] sm:text-[80px] text-white xs:text-[56px] leading-tight font-circular_bold xs:ml-0 ml-[10vw] xs:max-w-[100%] max-w-[40vw] ">
          Developer News
        </h1>
      </div>
    </div>
  );
};

export default community;
