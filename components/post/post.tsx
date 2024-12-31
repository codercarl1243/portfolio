'use client';
import type { POST_QUERYResult } from '@sanity/types/sanity.types';
import { H1, ImageComponent, P } from '@/components';
import PortableText from '@/components/components.portableText'


type TProps = {
    post: NonNullable<POST_QUERYResult>;
}

export default function Post({ post }: TProps) {

    const { image, heading, subheading, slug, blockContent } = post

    // console.log("post", post)

    return (
        <div className="post">

            <div className="post__image">
                {image.sanityAsset && <ImageComponent value={image.sanityAsset} alt={image.alt} />}
            </div>

            <div className='post__text'>
                <div className='post__text--heading'>
                    {heading && <H1>{heading}</H1>}
                    {subheading && <P>{subheading}</P>}
                </div>
                <div className='post__text--content'>
                    {post?.blockContent && <PortableText value={post?.blockContent} />}
                </div>
            </div>
        </div>
    )
}