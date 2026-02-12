import React from "react";
import Link from "next/link";
import { Button, Switch } from "@base-ui/react";

const Navbar = () => {
  return (
    <nav className="h-20 sm:overflow-hidden flex pl-5 pr-5 border-b justify-between font-sm ">
      <div className="flex items-center">
        <Link
          href="/"
          className="text-3xl bg-yellow-300 duration-100 p-1 text-black hover:bg-transparent hover:text-white   font-extrabold"
        >
          BookFlix
        </Link>
      </div>
      <div className="flex items-center gap-10">
        <Link
          href="/featured"
          className="text-xl hover:text-yellow-300 font-extrabold"
        >
          Featured Books
        </Link>
        <Link
          href="/about"
          className="text-xl hover:text-yellow-300 font-extrabold"
        >
          About
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Switch.Root

          className="relative flex h-6 w-10 rounded-full bg-gradient-to-r from-gray-700 from-35% to-gray-200 to-65% bg-[length:6.5rem_100%] bg-[100%_0%] bg-no-repeat p-px shadow-[inset_0_1.5px_2px] shadow-gray-200 outline outline-1 -outline-offset-1 outline-gray-200 transition-[background-position,box-shadow] duration-[125ms] ease-[cubic-bezier(0.26,0.75,0.38,0.45)] before:absolute before:rounded-full before:outline-offset-2 before:outline-blue-800 focus-visible:before:inset-0 focus-visible:before:outline focus-visible:before:outline-2 active:bg-gray-100 data-[checked]:bg-[0%_0%] data-[checked]:active:bg-yellow-30 dark:from-yellow-300 dark:shadow-black/75 dark:outline-white/15 dark:data-[checked]:shadow-none"
        >
          <Switch.Thumb className="aspect-square h-full rounded-full bg-white shadow-[0_0_1px_1px,0_1px_1px,1px_2px_4px_-1px] shadow-gray-100 transition-transform duration-150 data-[checked]:translate-x-4 dark:shadow-black/25" />
        </Switch.Root>
        <p>Dark mode </p>
      </div>
    </nav>
  );
};

export default Navbar;
