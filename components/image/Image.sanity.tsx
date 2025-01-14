import { getImageDimensionsForPortableTextImage, urlFor } from "@/sanity/lib/image.lib";
import { isPortableTextImage, isSanityAssetImage } from "./guards";
import Image from './index'
import { TSanityImageProps } from "./image";

export default function SanityImage(props: TSanityImageProps) {
    const { value, ...restProps } = props;

    if (isPortableTextImage(value.asset)) {
        const dimensions = getImageDimensionsForPortableTextImage(value);

        const src = urlFor(value).url();

        return (
            <Image
                src={src}
                alt={value.alt ?? ''}
                width={dimensions.width}
                height={dimensions.height}
                {...restProps}
            />
        );
    }

    else if (isSanityAssetImage(value.asset)) {
        if (!value.asset.url) throw new Error(`Sanity asset is missing a URL, \n asset: ${JSON.stringify(value.asset, null, 2)}`);

        return (
            <Image
                src={value.asset.url!}
                alt={value.alt ?? ''}
                width={restProps.width ?? 800}
                height={restProps.height ?? 300}
                {...restProps}
            />
        );
    }

    throw new Error(`image was provided but the app does not handle the type of ${JSON.stringify(value.asset, null, 2)}`);

}
