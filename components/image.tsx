'use server';
import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import { ComponentProps } from 'react';
import cx from 'classnames';

type TProps = {
    width?: number;
    height?: number;
    alt?: string;
    sanityImage: SanityImageSource;
} & Omit<ComponentProps<typeof Image>, 'src' >

export default async function Main({
    width = 800, height = 300, alt = "", sanityImage, className
}: TProps
) {
    
    if (!sanityImage) {
        return;
    }

    return (
        <Image
            src={urlFor(sanityImage)
                .width(width)
                .height(height)
                .url()}
            alt={alt}
            width={width}
            height={height} 
            className={cx('image block-image', className)}
        />
    )
}