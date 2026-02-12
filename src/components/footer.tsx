import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex border-t justify-center gap-20 font-medium p-6">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="font-bold text-lg">Socials</p>
        <Link href="https://example.com">Instagram</Link>
        <Link href="https://example.com">LinkedIn</Link>
        <Link href="https://example.com">Tiktok</Link>
      </div>

      <div className="flex flex-col items-center justify-start gap-2">
        <p className="font-bold text-lg">E-Mail</p>
        <Link href="mailto:bookflix@gmail.com"> bookflix@gmail.com</Link>
      </div>
    </footer>
  );
};

export default Footer;
