import { defineQuery } from "next-sanity";
// import {defineQuery} from 'groq'

export const POSTS_QUERY = defineQuery(`
    *[_type == "post" && defined(slug.current)]{
           _id,
           name,
           "slug": slug.current,
           date
       } | order(date desc)
       `)