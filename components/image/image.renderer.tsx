'use client';

import { isSanityImage } from "./guards";
import { TImageProps, TNextImageProps, TSanityImageProps } from "./image";
import Image from 'next/image';
import SanityImage from "./Image.sanity";
import classnames from 'classnames';
import { urlFor } from "@/sanity/lib/image.lib";

export default function Main(props: TImageProps) {


        // const check =  urlFor('https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699').url()
        // console.log("the check value is ", check)


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
