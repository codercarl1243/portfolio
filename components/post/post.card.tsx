'use client';
import type { POSTS_QUERYResult } from '@sanity/types/sanity.types';
import {ImageComponent, Link} from '@/components';
import {Text} from '@/components';

type TProps = {
    post: POSTS_QUERYResult[number];
}

// Refer to https://inclusive-components.design/cards/ on a11y cards and linking
export default function PostCard({ post }: TProps) {
    const { image: {sanityAsset}, heading, subheading, slug } = post

    return (
        <div className="div">
            <Text className='card__text'>
                <h3>
                    <Link href={`posts/${slug}`}>{heading}</Link>
                </h3>
                {subheading && <p>{subheading}</p>}
            </Text>
            <div className="card__image">
                {sanityAsset && sanityAsset  && <ImageComponent value={sanityAsset} alt={sanityAsset.alt}/>}
            </div>

        </div>
    )
}