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
            "sanityAsset": image { ..., asset->},
            "alt": coalesce(image.asset->altText, "")
            }
       } | order(date desc)
       `)

export const POST_QUERY = defineQuery(`
    *[_type == "post" && slug.current == $slug][0]{
           _id,
           heading,
           subheading,
           "slug": slug.current,
           "blockContent": details[]{
            ...,
            markDefs[]{
                ...,
                _type == "link" => {
                    "href": select(
                        linkType == "internal" =>  reference->_type + 's/' + reference->slug.current,
                        linkType == "external" => href
                    )
                }
            }
         },
           date,
           "image": {
            "sanityAsset": image { ..., asset->},
            "alt": coalesce(image.asset->altText, "")
            }
       }
       `)