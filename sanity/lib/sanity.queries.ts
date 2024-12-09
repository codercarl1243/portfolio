import { defineQuery } from "next-sanity";
// import {defineQuery} from 'groq'

export const POSTS_QUERY = defineQuery(`
    *[_type == "post" && defined(slug.current)]{
           _id,
           heading,
           subheading,
           "slug": slug.current,
           "blockContent": details,
           date,
           "image": {
            "sanity-asset": image.asset-> ,
            "alt": coalesce(image.asset->altText, "")
            }
       } | order(date desc)
       `)