import { POST_QUERYResult, POSTS_QUERYResult } from "../types/sanity.types";
import { POST_QUERY, POSTS_QUERY } from "./sanity.queries";
import { sanityFetch } from "@/app/studio/live";

export const getAllPosts = async () => await _SanityFetch<POSTS_QUERYResult>(POSTS_QUERY);

export const getPost = async (slug: string) => await _SanityFetch<POST_QUERYResult>(POST_QUERY, { slug })


async function _SanityFetch<T>(query: string, params?: Record<string, string>): Promise<T>{
    try {
        const {data} = await sanityFetch({
            query: query,
            params: { ...params}
        })

        if (!data) {
            throw new Error()
        }

    return data

    } catch (err) {
        console.error("Error occurred in Sanity fetch:", {
            query,
            params,
            error: err,
        });
        throw err; // Re-throw the error so the caller can handle it
    }
}