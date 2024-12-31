
import { getAllPosts } from "@/sanity/lib/groq";
import PostCard from "@/components/post/post.card";
import {H1, P} from '@/components';

export default async function Page() {
  const posts = await getAllPosts();
  return (
    <div>
      <H1>Welcome to the Posts Page</H1>
      <P>Select a post to read.</P>
      <ul>
        {posts?.map(post => (
          <li key={post._id}><PostCard post={post} /></li>
        ))}
      </ul>
    </div>
  )
}

