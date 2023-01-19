import React from "react";

const ConsoleCards = ({ title, children }) => {
  return (
    <article>
      <h1>{title}</h1>
      <table>
        <thead>
          <tr className="uppercase text-left">
            <th className="pr-4">Method</th>
            <th className="pr-3">Endpoint</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody className="text-left">{[children]}</tbody>
      </table>
    </article>
  );
};

export default ConsoleCards;
