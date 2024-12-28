
import { getAllPosts } from "@/sanity/lib/groq";
import PostCard from "@/components/post/post.card";
import { Stack, Text } from "@sanity/ui";

export default async function Page() {
  const posts = await getAllPosts();
  console.log("getAllPosts posts", posts)
  return (
    <Stack>
      <h1>Welcome to the Posts Page</h1>
      <Text>Select a post to read.</Text>
      <ul>
        {posts?.map(post => (
          <li key={post._id}><PostCard post={post} /></li>
        ))}
      </ul>
    </Stack>
  )
}

