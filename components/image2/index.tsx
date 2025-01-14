

import ImageComponent from './component';
import ImageUtils from './utils';
import type { TImageProps } from './image.d';

export default function Image(props: TImageProps) {
  const { src, alt, width, height, className, style } = ImageUtils(props);

  return (
    <ImageComponent
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
    />
  );
}