'use client';

import { isSanityImage } from "./guards";
import { TImageProps, TNextImageProps, TSanityImageProps } from "./image.dts";
import Image from 'next/image';
import SanityImage from "./Image.sanity";
import classnames from 'classnames';

export default function Main(props: TImageProps) {

    if (isSanityImage(props)) {
        return <SanityImage {...props as TSanityImageProps} />;
    }

    const { src, alt = "", width = 800, height = 300, className, ...rest } = props as TNextImageProps

    const imageClasses = classnames('image block-image', className);
    return (
        <Image
            {...rest}
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={imageClasses}

        />
    )
}
