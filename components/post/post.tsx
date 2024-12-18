import type { POST_QUERYResult } from '@sanity/types/sanity.types';
import Image from '../image';
import PortableText from '@/components/components.portableText'


type TProps = {
    post: NonNullable<POST_QUERYResult>;
}

export default function Post({ post }: TProps) {

    const { image, heading, subheading, slug, blockContent } = post

    return (
        <div className="post">

            <div className="post__image">
                {image.sanityAsset && <Image sanityImage={image.sanityAsset} alt={image.alt} />}
            </div>

            <div className='post__text'>
                <div className='post__text--heading'>
                    {heading && <h1 className='font-serif font-bold text-5xl my-2'>{heading}</h1>}
                    {subheading && <p className='font-light text-2xl my-1'>{subheading}</p>}
                </div>
                <div className='post__text--content'>
                    {blockContent && <PortableText value={blockContent} />}
                </div>
            </div>
        </div>
    )
}