import type { SanityImageObject, SanityAsset, SanityImageWithAssetStub, SanityReference } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';


export const imageVariants = {
    normal: { height: 300, width: 800 },
    hero: { height: 600, width: 1200 },
    banner: { height: 200, width: 1200 },
}

export type ImageVariant = keyof typeof imageVariants | undefined


type Toptions = {variant?: ImageVariant} & Record<string, string>;
export type TNextImageProps = React.ComponentProps<typeof Image> & {options?: Toptions};
export type SanityImage = SanityReference | SanityAsset | SanityImageObject | SanityImageWithAssetStub;
export type TSanityImageProps = { value: { asset: SanityImage, alt?: string } } & Omit<TNextImageProps, 'src' | 'srcSet' | 'alt'> & {options?: Toptions};
export interface ExtendedSanityImageObject extends SanityImageObject { alt?: string; };
export type TImageProps = TSanityImageProps | TNextImageProps;