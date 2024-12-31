
import { getAllPosts } from "@/sanity/lib/groq";
import PostCard from "@/components/post/post.card";
import {Text} from '@/components';

export default async function Page() {
  const posts = await getAllPosts();
  console.log("getAllPosts posts", posts)
  return (
    <div>
      <h1>Welcome to the Posts Page</h1>
      <Text>Select a post to read.</Text>
      <ul>
        {posts?.map(post => (
          <li key={post._id}><PostCard post={post} /></li>
        ))}
      </ul>
    </div>
  )
}

