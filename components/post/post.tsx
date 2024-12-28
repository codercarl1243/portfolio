import type { POST_QUERYResult, POSTS_QUERYResult } from '@sanity/types/sanity.types';
import {ImageComponent} from '@/components';
import PortableText from '@/components/components.portableText'
import { Stack } from '@sanity/ui';


type TProps = {
    post: NonNullable<POST_QUERYResult>;
}

export default function Post({ post }: TProps) {

    const { image, heading, subheading, slug, blockContent } = post

    // console.log("post", post)

    return (
        <Stack className="post">

            <div className="post__image">
                {image.sanityAsset && <ImageComponent value={image.sanityAsset} alt={image.alt} />}
            </div>

            <Stack className='post__text'>
                <div className='post__text--heading'>
                    {heading && <h1 className='font-serif font-bold text-5xl my-2'>{heading}</h1>}
                    {subheading && <p className='font-light text-2xl my-1'>{subheading}</p>}
                </div>
                <div className='post__text--content'>
                    {post?.blockContent && <PortableText value={post?.blockContent} />}
                </div>
            </Stack>
        </Stack>
    )
}