import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <div >
        <nav className="md:text-xl justify-between sm:justify-around py-4 flex items-center px-2 text-lg bg-gradient-to-r from-purple-500 to-pink-300  w-screen ">
          <span>
            <Link
              className=" text-white hover:text-black font-extrabold md:text-3xl text-left  font-serif "
              href="./"
            >
              Fetching API
            </Link>
          </span>
          <ul className="  opacity-2 flex gap-2 sm:gap-11 text-center justify-evenly ">
            <li className="text-white text-base sm:text-xl hover:text-black">
              {" "}
              <Link href="./server">Server side</Link>
            </li> 

            <li className="text-white text-base sm:text-xl hover:text-black">
              <Link href="./client">Client side</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
