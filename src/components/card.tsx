import React from "react";
import { Button } from "@base-ui/react";
import Image from "next/image";

interface CardProps {
  data: {
    title: string;
    author: string;
    imageUrl: string;
  };
}
const PRICE = 15;

const Card = ({ data }: CardProps) => {
  return (
    <div className="flex flex-col border-black border-0 bg-black rounded-md dark:bg-white dark:border-white w-[200px]  h-[380px] hover:scale-105 duration-150">
      <div className="relative w-full h-[250px]">
        <Image
          className="rounded-t-md object-cover"
          src={data.imageUrl}
          fill
          alt="book cover"
        />
      </div>
      <div className="flex flex-col items-center flex-1 pt-2 pb-4">
        <p className="text-white font-semibold dark:text-black text-center break-words px-2 line-clamp-2">
          {data.title}
        </p>
        <p className="text-white dark:text-black text-center break-words px-2 text-sm line-clamp-1">
          {data.author}
        </p>
        <Button className="mt-auto flex items-center justify-center w-fit h-10 px-3.5 m-0 outline-0 border border-gray-200 rounded-md bg-gray-50 font-inherit text-base font-medium leading-6 text-gray-900 select-none hover:data-[disabled]:bg-yellow-300 hover:bg-yellow-300 active:data-[disabled]:bg-gray-50 active:bg-yellow-500 active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] active:border-t-gray-300 active:data-[disabled]:shadow-none active:data-[disabled]:border-t-gray-200 focus-visible:outline-2 focus-visible:outline-blue-800 focus-visible:-outline-offset-1 data-[disabled]:text-gray-500">
          Buy now - ${PRICE}
        </Button>
      </div>

    </div>
  );
};

export default Card;
