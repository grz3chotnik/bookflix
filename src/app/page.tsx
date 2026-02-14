import Link from "next/link";
import { Button } from "@base-ui/react";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black px-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif">BookFlix</h1>
        <h2 className="text-xl  text-gray-700 dark:text-gray-300 ">Discover your next book here</h2>
        <Button className="flex  hover:bg-yellow-300   duration-100 items-center justify-center h-12 px-3.5 m-0 outline-0 border border-gray-200 rounded-md bg-gray-50 font-inherit text-xl font-bold leading-6 text-gray-900 select-none hover:data-[disabled]:bg-gray-50 hover:bg-gray-100 active:data-[disabled]:bg-gray-50 active:bg-yellow-500 active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] active:border-t-gray-300 active:data-[disabled]:shadow-none active:data-[disabled]:border-t-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800 focus-visible:-outline-offset-1 data-[disabled]:text-gray-500">
          <Link href="/featured">Browse books</Link>
        </Button>


          <div>



          </div>
      </div>
    </div>
  );
}
