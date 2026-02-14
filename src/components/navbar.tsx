"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Switch } from "@base-ui/react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    setDark(stored ? stored === "dark" : true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <nav className="border-b">
      <div className="h-20 flex px-5 justify-between items-center">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-4xl duration-100 p-1 text-black  dark:text-yellow-300 font-extrabold font-serif"
          >
            BookFlix
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-10">
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

        <div className="hidden md:flex items-center gap-4">
          <Switch.Root
            className="relative flex h-6 w-10 rounded-full bg-gradient-to-r from-gray-700 from-35% to-gray-200 to-65% bg-[length:6.5rem_100%] bg-[100%_0%] bg-no-repeat p-px shadow-[inset_0_1.5px_2px] shadow-gray-200 outline outline-1 -outline-offset-1 outline-gray-200 transition-[background-position,box-shadow] duration-[125ms] ease-[cubic-bezier(0.26,0.75,0.38,0.45)] before:absolute before:rounded-full before:outline-offset-2 before:outline-blue-800 focus-visible:before:inset-0 focus-visible:before:outline focus-visible:before:outline-2 active:bg-gray-100 data-[checked]:bg-[0%_0%] data-[checked]:active:bg-yellow-30 dark:from-yellow-300 dark:shadow-black/75 dark:outline-white/15 dark:data-[checked]:shadow-none"
            checked={dark}
            onCheckedChange={setDark}
          >
            <Switch.Thumb className="aspect-square h-full rounded-full bg-white shadow-[0_0_1px_1px,0_1px_1px,1px_2px_4px_-1px] shadow-gray-100 transition-transform duration-150 data-[checked]:translate-x-4 dark:shadow-black/25" />
          </Switch.Root>
          Dark mode
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-5 pb-5">
          <Link
            href="/featured"
            className="text-xl hover:text-yellow-300 font-extrabold"
            onClick={() => setMenuOpen(false)}
          >
            Featured Books
          </Link>
          <Link
            href="/about"
            className="text-xl hover:text-yellow-300 font-extrabold"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <div className="flex flex-row">
            <p className="text-xl font-extrabold pr-2">
              Dark mode
            </p>

            <Switch.Root
              className="relative flex h-6 w-10 rounded-full bg-gradient-to-r from-gray-700 from-35% to-gray-200 to-65% bg-[length:6.5rem_100%] bg-[100%_0%] bg-no-repeat p-px shadow-[inset_0_1.5px_2px] shadow-gray-200 outline outline-1 -outline-offset-1 outline-gray-200 transition-[background-position,box-shadow] duration-[125ms] ease-[cubic-bezier(0.26,0.75,0.38,0.45)] before:absolute before:rounded-full before:outline-offset-2 before:outline-blue-800 focus-visible:before:inset-0 focus-visible:before:outline focus-visible:before:outline-2 active:bg-gray-100 data-[checked]:bg-[0%_0%] data-[checked]:active:bg-yellow-30 dark:from-yellow-300 dark:shadow-black/75 dark:outline-white/15 dark:data-[checked]:shadow-none"
              checked={dark}
              onCheckedChange={setDark}
            >
              <Switch.Thumb className="aspect-square h-full rounded-full bg-white shadow-[0_0_1px_1px,0_1px_1px,1px_2px_4px_-1px] shadow-gray-100 transition-transform duration-150 data-[checked]:translate-x-4 dark:shadow-black/25" />
            </Switch.Root>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
