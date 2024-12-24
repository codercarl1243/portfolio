'use client';
import React, { Component } from 'react';

import { getImageDimensionsForPortableTextImage, urlFor } from '@/sanity/lib/image.lib';
import Image from 'next/image';
import { ComponentProps } from 'react';
import classnames from 'classnames';
import type { SanityAsset, SanityImageObject, SanityImageSource, SanityReference } from '@sanity/image-url/lib/types/types';

type TNextImageProps = ComponentProps<typeof Image>;
type SanityImageSourceObject = Omit<SanityImageSource, 'string'>;
type TSanityImageProps = { value: { asset: SanityImageSourceObject, alt?: string } } & Omit<TNextImageProps, 'src' | 'srcSet' | 'alt'>;
export interface ExtendedSanityImageObject extends SanityImageObject { alt?: string; };
export type TImageProps = TSanityImageProps | TNextImageProps;

export default function Main(props: TImageProps) {
    try {
        if (isSanityImage(props)) {
            return <SanityImageRenderer {...props} />;
        }

        return <ImageRenderer {...props} />;

    } catch (err) {
        console.log('Unsupported Sanity image type', err);
        return null;
    }
}


// Typeguards for images
function isSanityImage(props: TImageProps): props is TSanityImageProps {
    return 'value' in props && 'asset' in props.value;
}

function isPortableTextImage(asset: SanityImageSourceObject): asset is SanityReference {
    return '_ref' in asset;
}

function isSanityAssetImage(asset: SanityImageSourceObject): asset is SanityAsset {
    return 'url' in asset;
}



function SanityImageRenderer(props: TSanityImageProps) {
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
    
    throw new Error('image was provided but the app does not handle this type' );

}


function ImageRenderer({ src, alt = "", width = 800, height = 300, className, ...props }: TNextImageProps) {

    const imageClasses = classnames('image block-image', className);

    return (
        <Image
            {...props}
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={imageClasses}

        />
    )

}


class ErrorBoundary extends Component<{children: React.ReactNode}, { hasError: boolean }> {
    constructor(props: {children: React.ReactNode}) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError() {
      // Update state to show fallback UI
      return { hasError: true };
    }
  
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      // You can log the error to an external service
      console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // Fallback UI when an error is caught
        return <h1>Something went wrong while loading the image.</h1>;
      }
  
      return this.props.children;
    }
  }