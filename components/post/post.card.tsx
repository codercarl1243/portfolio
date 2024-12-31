'use client';
import type { POSTS_QUERYResult } from '@sanity/types/sanity.types';
import {H3, ImageComponent, Link} from '@/components';
import {P} from '@/components';

type TProps = {
    post: POSTS_QUERYResult[number];
}

// Refer to https://inclusive-components.design/cards/ on a11y cards and linking
export default function PostCard({ post }: TProps) {
    const { image: {sanityAsset}, heading, subheading, slug } = post
    console.log("props for card", post)

    return (
        <div className="div">
            <div className='card__text'>
                <H3>
                    <Link href={`posts/${slug}`}>{heading}</Link>
                </H3>
                {subheading && <P>{subheading}</P>}
            </div>
            <div className="card__image">
                {sanityAsset && sanityAsset  && <ImageComponent value={sanityAsset} alt={sanityAsset.alt}/>}
            </div>

        </div>
    )
}