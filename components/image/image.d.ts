import type { SanityImageObject, SanityAsset, SanityImageWithAssetStub, SanityReference } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';


export type TNextImageProps = React.ComponentProps<typeof Image>;
export type SanityImage = SanityReference | SanityAsset | SanityImageObject | SanityImageWithAssetStub;
export type TSanityImageProps = { value: { asset: SanityImage, alt?: string } } & Omit<TNextImageProps, 'src' | 'srcSet' | 'alt'>;
export interface ExtendedSanityImageObject extends SanityImageObject { alt?: string; };
export type TImageProps = TSanityImageProps | TNextImageProps;