import React from "react";
import Card from "@/components/card";

interface Work {
  title: string;
  authors: { name: string }[];
  cover_id: number;
}

const Page = async () => {
  const res = await fetch(
    "https://openlibrary.org/subjects/fiction.json?limit=6",
  );
  const json = await res.json();
  const books: { title: string; author: string; imageUrl: string }[] =
    json.works.map((work: Work) => ({
      title: work.title,
      author: work.authors?.[0]?.name ?? "Unknown",
      imageUrl: `https://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`,
    }));

  return (
    <div className="flex flex-1 h-full items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-5 flex-wrap p-5">
      {books.map((book, i) => (
        <Card key={i} data={book} />
      ))}
    </div>
  );
};

export default Page;
