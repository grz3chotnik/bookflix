import React from "react";

const Page = () => {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="max-w-2xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">About BookFlix</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          BookFlix is your personal book discovery platform. We help readers
          find their next favorite read by curating a diverse collection of
          titles across every genre — from timeless classics to the latest
          bestsellers.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Whether you're into thrilling mysteries, heartfelt romances, or
          mind-bending sci-fi, BookFlix has something for you. Browse our
          featured picks, explore new arrivals, and build your reading list with
          ease.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Built by book lovers, for book lovers. Happy reading!
        </p>
      </div>
    </div>
  );
};

export default Page;
