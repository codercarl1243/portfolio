import NextImage from 'next/image';
import type { TNextImageProps } from './image.d';

import { ErrorBoundary } from "react-error-boundary";
import logErrorToService from "../Logger";
import { CiImageOff } from "react-icons/ci";

export default function ImageComponent({
    src,
    alt,
    width = 800,
    height = 300,
    className,
    style,
}: TNextImageProps) {

    return (
        <ErrorBoundary
            fallback={<FallbackImage width={width} height={height} />}
            onError={logErrorToService}
        >
            <NextImage
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={className}
                style={style}
            />
        </ErrorBoundary>
    );
}

function FallbackImage({ width, height }: React.ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <div style={{ width, height }} className="fallback-image">
            <CiImageOff />
        </div>
    )
}
