import React, { useEffect, useState } from "react";
import NewsUI from "../components/NewsUI";

const Community = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        "https://newsapi.org/v2/top-headlines?category=technology&country=us&apiKey=2fb94c97708f4ad4842b9a15cc4cf770"
      );
      const data = await res.json();
      setArticles(data.articles);
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
        {articles.lenght === 0 ? (
          <div>Loading....</div>
        ) : (
          articles.map((article) => <NewsUI article={article} />)
        )}
      </main>
    </div>
  );
};

export default Community;
