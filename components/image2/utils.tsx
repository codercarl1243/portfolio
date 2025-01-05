import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { type TNextImageProps, type TImageProps, type ImageVariant, imageVariants } from './image.d';
import classnames from 'classnames';
import { isSanityImage, isSanityImageObject } from './guards';
import { getImageDimensionsForPortableTextImage, urlFor } from '@/sanity/lib/image.lib';

export default function ImageUtils(props: TImageProps): TNextImageProps {
    const {
        src,
        alt = '',
        width = 800,
        height = 300,
        className = '',
        style = {},
        options
    } = props;

    const resolvedSrc = getImageSource(src)

    const imageClasses = classnames('image block-image', className);

    const { finalWidth, finalHeight } = getImageDimensions(src, options?.variant)

    return {
        src: resolvedSrc,
        alt,
        width: finalWidth,
        height: finalHeight,
        className: imageClasses,
        style
    };
}

function getImageSource(src: SanityImageSource) {

    if (typeof src === 'string') {
        return src.trim();
    }

    if (isSanityImage(src)) {
        return urlFor(src).url();
    }

    throw new Error(`image src was provided but the app does not handle the type of ${JSON.stringify(src, null, 2)}`);
}

function getImageDimensions(src: SanityImageSource, variant?: ImageVariant) {
    let finalWidth = imageVariants['normal'].width;
    let finalHeight = imageVariants['normal'].height;

    if (variant) {
        finalWidth = imageVariants[variant].width;
        finalHeight = imageVariants[variant].height;
    } 
    if (!variant && isSanityImageObject(src)) {
        const dimensions = getImageDimensionsForPortableTextImage(src);
        finalWidth = dimensions.width;
        finalHeight = dimensions.height;
    }

    return {
        finalWidth,
        finalHeight,
    }
}