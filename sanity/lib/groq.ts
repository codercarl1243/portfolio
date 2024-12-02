import { sanityFetch } from "@/app/studio/live";
import { client } from './client';
import type { Post } from '../types/sanity.types'
import { POSTS_QUERY } from "./sanity.queries";

export function getAllPosts(){
    return client.fetch(POSTS_QUERY)
}