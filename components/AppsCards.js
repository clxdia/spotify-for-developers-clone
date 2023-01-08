import Image from "next/image";
import React from "react";

const AppsCards = ({ appicon, apptitle, appbio }) => {
  return (
    <div className="bg-whiteish hover:bg-light_grey flex rounded-tr-lg rounded-br-lg mt-5 items-center">
      <Image src={appicon} className="w-[150px] h-[150px]"></Image>
      <div className="p-3">
        <h4 className="font-semibold">{apptitle}</h4>
        <p className="text-[15px]">{appbio}</p>
      </div>
    </div>
  );
};

export default AppsCards;
