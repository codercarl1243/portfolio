import type { Image, ImageMetadata } from 'sanity';

export type SanityImage = Image & {
  alt?: string | undefined;
};
export type ImageObject = {
  image: SanityImage;
  metaData: ImageMetadata;
};
