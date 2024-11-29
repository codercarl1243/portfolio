import { sanityFetch } from "@/app/studio/live";
import { defineQuery } from "next-sanity";

const POSTS_QUERY = defineQuery(
    `
 *[_type == "post" && defined(slug.current)]{
        _id,
        name,
        "slug": slug.current,
        date
    } | order(date desc)
    `
)

export const getAllPosts = () => sanityFetch({query: POSTS_QUERY})