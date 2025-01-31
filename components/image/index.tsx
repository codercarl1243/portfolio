'use client';

import { TImageProps } from "./image";
import ImageRenderer from './image.renderer';
import { ErrorBoundary } from "react-error-boundary";
import logErrorToService from "../Logger";
import { CiImageOff } from "react-icons/ci";


export default function MainImage(props: TImageProps) {
    return (
        <ErrorBoundary
            fallback={<FallbackImage width={props.width ?? 800} height={props.height ?? 300} />}
            onError={logErrorToService}
        >
            <ImageRenderer {...props} />
        </ErrorBoundary>
    )
}




function FallbackImage({ width, height }: React.ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <div style={{ width, height }} className="fallback-image">
            <CiImageOff />
        </div>
    )
}