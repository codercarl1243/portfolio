import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';

type TProps = {
    width?: number;
    height?: number;
    alt?: string;
    imageAsset: SanityImageSource;
}

export default function Main({
    width = 800,  height = 300, alt = "", imageAsset
}: TProps
){


    return (
        <Image 
            src={urlFor(imageAsset)
                .width(width)
                .height(height)
                .url()} 
            alt={alt} 
            width={width}
            height={height}
            className='image'
        />
    )
}