import { SanityAsset, SanityReference } from "@sanity/image-url/lib/types/types";
import { SanityImageSourceObject, TImageProps, TSanityImageProps } from "./image.dts";

export function isSanityImage(props: TImageProps): props is TSanityImageProps {
    return (props
        && 'value' in props
        && 'asset' in props.value);
}

export function isPortableTextImage(asset: SanityImageSourceObject): asset is SanityReference {
    return (asset
        && '_ref' in asset);
}

export function isSanityAssetImage(asset: SanityImageSourceObject): asset is SanityAsset {
    return (asset
        && 'url' in asset);
}
