import Image from "next/image";
import React from "react";

const DiscoverApps = ({
  title,
  apps1,
  apps2,
  app1title,
  app1bio,
  app2title,
  app2bio,
}) => {
  return (
    <div className="w-[50%]">
      <h4 className="font-semibold">{title}</h4>
      <div className="bg-whiteish hover:bg-light_grey flex rounded-tr-lg rounded-br-lg mt-5">
        <Image src={apps1} className="w-[150px] h-[150px]"></Image>
        <div className="p-3">
          <h4 className="font-semibold">{app1title}</h4>
          <p className="text-[15px]">{app1bio}</p>
        </div>
      </div>
      <div className="bg-whiteish hover:bg-light_grey flex rounded-tr-lg rounded-br-lg mt-3">
        <Image src={apps2} className="w-[150px] h-[150px]"></Image>
        <div className="p-3">
          <h4 className="font-semibold">{app2title}</h4>
          <p className="text-[15px]">{app2bio}</p>
        </div>
      </div>
    </div>
  );
};

export default DiscoverApps;
