import type { SanityImageObject, SanityImageSource } from "@sanity/image-url/lib/types/types";

export function isSanityImage(obj: unknown): obj is Omit<SanityImageSource, 'string'> {
    return (
      typeof obj === 'object' &&
      obj !== null &&
      ('_ref' in obj || 'url' in obj)
    );
  }

    /** 
     * asset: SanityReference | SanityAsset;
     * crop?: SanityImageCrop;
     * hotspot?: SanityImageHotspot;
     */
export function isSanityImageObject(obj: unknown): obj is SanityImageObject {
    return (
        typeof obj === 'object' 
        &&  obj !== null 
        && 'asset' in obj
    )
}

 