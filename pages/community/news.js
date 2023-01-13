import Image from "next/image";
import React, { useEffect, useState } from "react";
import NewsUI from "../../components/NewsUI";

import loading from "/public/loading.gif";

const News = () => {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://newsdata.io/api/1/news?apike9y=${process.env.NEXT_PUBLIC_API_KEY}&language=it&from_date=2023-01-12&to_date=2023-01-12&category=technology`
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data from the api");
          }
          return res.json();
        })
        .then((data) => {
          setArticles(data.results);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div>
      <div className="flex xs, sm:hidden">
        <div className="h-[0.9rem] w-[300px] min-w-[300px] bg-greenify"></div>
        <div className="h-[0.9rem] bg-black_code w-[100%]"></div>
      </div>
      <div className="bg-community bg-cover h-[400px] w-[100%] m-auto flex items-center">
        <h1 className="xs:p-5 xs:w-[100%] text-[80px] w-[750px] m-auto text-white xs:text-[56px] leading-tight font-circular_bold xs:ml-0 ml-[16vw] sm:ml-[4vw] xs:max-w-[90%] xs:m-auto ">
          Developer News
        </h1>
      </div>
      <main>
        {isPending && (
          <article className="m-auto text-center w-[65%] mb-10 h-[20rem] mt-32 gap-0 flex flex-col justify-center sm:w-[75%] xs:w-[95%]">
            <p className="text-grey text-[13px]">Loading news</p>
            <Image src={loading} className="w-[150px] h-auto m-auto"></Image>
          </article>
        )}
        {error && (
          <article className="m-auto text-center w-[65%] mb-10 h-[20rem] mt-10 flex flex-col justify-center gap-4 sm:w-[75%] xs:w-[95%]">
            <h3 className="text-menu_grey text-[16px]">
              Something went wrong, please try again in a bit.
            </h3>
            <p className="text-grey text-[13px]">{error}</p>
          </article>
        )}

        {articles &&
          articles.map((article) => (
            <NewsUI article={article} key={article.pubDate} />
          ))}
      </main>
    </div>
  );
};

export default News;
