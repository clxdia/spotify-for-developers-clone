import React from "react";

const ConsoleCards = ({ title, table }) => {
  return (
    <article className="p-[3rem]">
      <h1 className="font-circular_bold">{title}</h1>
      <table className="mt-5">
        <thead>
          <tr className="uppercase text-left font-circular_light font-[100] text-[12px]">
            <th className="pr-4">Method</th>
            <th className="pr-3">Endpoint</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody className="text-left">{table}</tbody>
      </table>
    </article>
  );
};

export default ConsoleCards;
