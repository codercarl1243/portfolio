import type { POST_QUERYResult } from '@sanity/types/sanity.types';
import Image from '../image';
import Link from 'next/link';
import { PortableText } from 'next-sanity';

type TProps = {
    post: POST_QUERYResult;
}

// Refer to https://inclusive-components.design/cards/ on a11y cards and linking
export default function Post({ post }: TProps) {
    const { image, heading, subheading, slug, blockContent } = post
    // console.log("recieived po st data", post)

    return (
        <div className="post">

            <div className="post__image">
                {image.sanityAsset && <Image imageAsset={image.sanityAsset} alt={image.alt} />}
            </div>

            <div className='post__text'>
                <div className='post__text--heading'>
                    <h1 className='font-serif font-bold text-5xl my-2'>{heading}</h1>
                    <p className='font-light text-2xl my-1'>{subheading}</p>
                </div>
                <div className='post__text--content'>
                    <PortableText value={blockContent} />
                </div>
            </div>
        </div>
    )
}