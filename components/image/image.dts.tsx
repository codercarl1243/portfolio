import type { SanityImageSource, SanityImageObject } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';


export type TNextImageProps = React.ComponentProps<typeof Image>;
export type SanityImageSourceObject = Omit<SanityImageSource, 'string'>;
export type TSanityImageProps = { value: { asset: SanityImageSourceObject, alt?: string } } & Omit<TNextImageProps, 'src' | 'srcSet' | 'alt'>;
export interface ExtendedSanityImageObject extends SanityImageObject { alt?: string; };
export type TImageProps = TSanityImageProps | TNextImageProps;