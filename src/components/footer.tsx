import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t  border-black dark:border-white px-8 py-4 text-gray-400">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4">
        <div className="flex gap-16">
          <div className="flex flex-col items-center gap-2">
            <p className="font-bold text-lg text-black dark:text-white">Socials</p>
            <Link
              href="https://example.com"
              className="hover:text-yellow-300 transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="https://example.com"
              className="hover:text-yellow-300 transition-colors"
            >
              Tiktok
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="font-bold text-lg text-black dark:text-white">E-Mail</p>
            <Link
              href="mailto:bookflix@gmail.com"
              className="hover:text-yellow-300 transition-colors"
            >
              bookflix@gmail.com
            </Link>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          &copy; 2026 BookFlix. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
