import type { POSTS_QUERYResult } from '@sanity/types/sanity.types';
import Image from '../image';
import Link from 'next/link';

type TProps = {
    post: POSTS_QUERYResult[number];
}

// Refer to https://inclusive-components.design/cards/ on a11y cards and linking
export default function PostCard({ post }: TProps) {
    const { image, heading, subheading, slug } = post

    return (
        <div className="card">
            <div className='card__text'>
                <h3>
                    <Link href={`posts/${slug}`}>{heading}</Link>
                </h3>
                {subheading && <p>{subheading}</p>}
            </div>
            <div className="card__image">
                {image.sanityAsset && <Image imageAsset={image.sanityAsset} alt={image.alt} />}
            </div>

        </div>
    )
}