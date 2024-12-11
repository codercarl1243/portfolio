import Post from "@/components/post/post";
import { getPost } from "@/sanity/lib/groq";
import { notFound, redirect } from 'next/navigation'

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }){
    const {slug} = await params;
console.log("slug", slug)
    if (!slug) {
      redirect("/");
    }

    const post = await getPost(slug);

    if (!post) {
        notFound()
      }

    return (
        <main>
            <Post post={post}/>
        </main>
    )
}

