import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-20 sm:overflow-hidden flex pl-4 pr-4 border-b justify-between font-medium ">
      <div className="flex items-center">
        <Link href="/" className="text-3xl font-extrabold">
          BookFlix
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/featured" className="text-3xl font-extrabold">
          Featured Books
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/about" className="text-3xl font-extrabold">
          About
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
