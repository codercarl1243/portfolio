'use client'
import { PortableText, PortableTextBlock, PortableTextBlockComponent, PortableTextComponent, PortableTextComponentProps, PortableTextProps } from "next-sanity";
import type { PortableTextMarkComponentProps, PortableTextMarkComponent } from "next-sanity";

import { Blockquote, Bold, BulletList, Code, H1, H2, H3, ImageComponent, Italic, Link, P, NumberedList, Underline } from "@/components";
import type { PortableTextLinkProps } from '@/components/link/link.dts';
import type { CodeInputValue } from "@sanity/code-input";
import { TSanityImageProps } from "./image/image.dts";

// The PortableTextComponentProps Generic widens the type of 'value' too much
interface PortableSanityImageProps extends PortableTextComponentProps<TSanityImageProps['value']> {
  value: TSanityImageProps['value'];
}

const portableTextComponents = {
  types: {
    image: ({ value }: PortableSanityImageProps) => <ImageComponent value={value} />,
    code: ({ value }: PortableTextComponentProps<CodeInputValue>) => <Code code={value.code} language={value.language} filename={value.filename} highlightedLines={value.highlightedLines} />,
  },
  block: {
    h1: H1,
    h2: H2,
    h3: H3,
    normal: P,
    blockquote: Blockquote,
  },
  marks: {
    b: ({ children }: PortableTextMarkComponentProps) => children ? <Bold>{children}</Bold> : null,
    i: ({ children }: PortableTextMarkComponentProps) => children ? <Italic>{children}</Italic> : null,
    underline: ({ children }: PortableTextMarkComponentProps) => children ? <Underline>{children}</Underline> : null,
    link: (props: PortableTextLinkProps) => <Link {...props} />,
  },
  // lists: {
  //   bullet:  ({children}: { children: React.ReactNode }) => BulletList,
  //   number:  ({children}: { children: React.ReactNode }) => children ? NumberedList : null,
  // },
};




// FunctionComponent<PortableTextMarkComponentProps<any>>
export default function Main({ value }: { value: any }) {
  return (
    <div className="!max-w-fit prose py-4 ">
      <PortableText value={value} components={portableTextComponents} />
    </div>
  )
}