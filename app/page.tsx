import { getAllPosts } from "@/sanity/lib/groq";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { sanityFetch } from "./studio/live";

export default async function Home() {
  const posts = await getAllPosts();
  console.log("posts", posts)
  return (
    <div className=" bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
   <Image
          // className="dark:invert"
          src="/coderCarl_main_transparent.png"
          alt="Coder Carl logo"
          width={180}
          height={38}
          priority
        />
       <h1 className="font-accent font-bold text-4xl">h1</h1>
        <h2 className="font-accent font-bold text-3xl">h2</h2>
        <h3 className="font-accent font-bold text-2xl">h3</h3>
        <h4 className="font-accent font-bold text-xl">h4</h4>

        <p className="font-main text-base">normal text</p>
        <i className="font-main italic">italic text</i>
        <p className="font-main font-bold">bold text</p>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
     
    {/* {posts.map(({body}) => <PortableText value={body} />)} */}

      </main>
    </div>
  );
}
