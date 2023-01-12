import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const NewsUI = ({ article }) => {
  return (
    <article className="m-auto w-[65%] mb-10 sm:w-[75%] xs:w-[95%]">
      <div className="m-auto w-[60%] sm:w-[90%] xs:w-[99%] p-4 pt-20 pb-20 flex-col flex sm:gap-3 gap-5">
        <h1 className="font-circular_bold leading-tight hover:text-light_green">
          <Link href={article.link}>{article.title}</Link>
        </h1>
        <p className="text-grey text-[13px]">{article.pubDate}</p>
        <p className="font-circular_bold">by {article.creator}</p>
        <p>{article.description}</p>
        <Link
          className="mt-2 uppercase hover:text-light_green flex items-center gap-3 text-[13px] font-bold text-greenify tracking-wider"
          href={article.link}
        >
          read more
          <BsArrowRight size={20} />
        </Link>
      </div>

      <hr className=" border-[0.5px] border-grey"></hr>
    </article>
  );
};

export default NewsUI;
