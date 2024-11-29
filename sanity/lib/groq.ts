import { sanityFetch } from "@/app/studio/live";
import { client } from './client';
import { defineQuery } from "next-sanity";
import type { Post } from '../types/sanity.types'

const POSTS_QUERY = defineQuery(`
 *[_type == "post" && defined(slug.current)]{
        _id,
        name,
        "slug": slug.current,
        date
    } | order(date desc)
    `)

export function getAllPosts(): Promise<Post[]> {
    return client.fetch(POSTS_QUERY)
}