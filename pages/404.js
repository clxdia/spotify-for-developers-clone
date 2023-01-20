import Link from "next/link";

export default function Custom404() {
  return (
    <main className="bg-light_black text-white font-circular_bold xs:p-[3rem] pt-[5rem] xs:pb-[4rem] p-[4rem]">
      <h1 className="text-[80px] xs:text-[48px] sm:text-[64px] leading-tight ">
        404 - Page not found
      </h1>
      <p className="font-circular_light text-[18px] mb-2">
        Oops! It seems like we can&#39;t find the page you are looking for.
      </p>
      <button className="bg-greenify w-fit text-[14px] xs, sm:mb-3 text-white p-4 pl-10 pr-10 rounded-[50px] uppercase font-sans font-bold tracking-widest mt-3 hover:bg-link hover:ease-in-out">
        <Link href="/">go home</Link>
      </button>
    </main>
  );
}
