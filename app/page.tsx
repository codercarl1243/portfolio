import { getAllPosts } from "@/sanity/lib/groq";
import { PortableText } from "next-sanity";
import { sanityFetch } from "./studio/live";
import { client } from "@/sanity/lib/client";
import { Post } from "@/sanity/types/sanity.types";
import { POSTS_QUERY } from "@/sanity/lib/sanity.queries";
import PostCard from "@/components/post/post.card";

export default async function Home() {
  const posts = await getAllPosts();
  console.log("posts", posts)
  return (
    <div>

        <ul>
          {posts?.map(post => <li key={post._id}><PostCard post={post}/></li>)}
        </ul>
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
