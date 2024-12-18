
import { getAllPosts } from "@/sanity/lib/groq";
import PostCard from "@/components/post/post.card";

export default async function Page(){
  const posts = await getAllPosts();
  console.log("getAllPosts posts", posts)
    return (
      <>
      <h1>Welcome to the Posts Page</h1>
      <p>Select a post to read.</p>
      <ul>
          {posts?.map(post =>(
            <li key={post._id}><PostCard post={post}/></li>
            ))}
        </ul>
    </>
    )
}

