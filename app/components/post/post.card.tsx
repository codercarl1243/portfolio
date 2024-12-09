import type {Post, POSTS_QUERYResult} from '@sanity/types/sanity.types';
import Image from '../image';

type TProps = {
    post: POSTS_QUERYResult[number];
}

// Refer to https://inclusive-components.design/cards/ on a11y cards and linking
export default function PostCard ({post}: TProps) {
    const {image, heading, subheading} = post

    if (!image || !heading) return;

    return (

        <div>
            <h3>{heading}</h3>
            {subheading && <p>{subheading}</p>}
           <Image imageAsset={image} alt={image.alt}/>

        </div>
    )
}