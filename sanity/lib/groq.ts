import { client } from './client';
import { POST_QUERY, POSTS_QUERY } from "./sanity.queries";
import { sanityFetch } from "@/app/studio/live";

export async function getAllPosts() {

    try {
        const result = await client.fetch(POSTS_QUERY);
        if (!result) return [];

        return result;

    } catch (err) {
        console.log("error occured in fetching Posts \n", err)
    }
}

export async function getPost(slug: string) {

    try {
        // console.log("GET POST slug", slug)
        const {data} = await sanityFetch({
            query: POST_QUERY,
            params: { slug: 'post1' }
        })

        // const result = await client.fetch(POST_QUERY, { slug });
        // console.log("RESULT ", result)
        // console.log("GET POST", data)
        if (!data) {
            console.warn(`No post found for slug: ${slug}`);
            return null;
        }

        return data;

    } catch (err) {
        console.log(`error occured in fetching Post: ${slug} \n`, err)
    }
}