import React, { useEffect, useState } from "react";
import NewsUI from "../components/NewsUI";

const Community = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        // `http://api.mediastack.com/v1/news?access_key=${process.env.NEXT_PUBLIC_API_KEY}&categories=technology&countries=us,gb&limit=5`
        `https://newsdata.io/api/1/news?apikey=pub_155834ba165cf1779362906eb93c17ba38fa8&&language=en,it&from_date=2023-01-12&to_date=2023-01-12&category=technology`
      );
      const data = await res.json();
      setArticles(data.results);
    };
    fetchNews();
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
        {articles.length < 0 ? (
          <div>Loading....</div>
        ) : (
          articles.map((article) => <NewsUI article={article} />)
        )}
      </main>
    </div>
  );
};

export default Community;
