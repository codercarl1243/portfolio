import { client } from './client';
import { POSTS_QUERY } from "./sanity.queries";

export async function getAllPosts(){

    try {
        const result = await client.fetch(POSTS_QUERY);
        if (!result) return [];
    
        return result;

    } catch (err) {
        console.log("error occured in fetching Posts \n", err)
    }
}