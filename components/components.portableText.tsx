'use client'
import { PortableText, PortableTextBlock, PortableTextBlockComponent, PortableTextComponent, PortableTextComponentProps, PortableTextMarkComponent, PortableTextMarkComponentProps, PortableTextProps } from "next-sanity";
import { Blockquote, Bold, BulletList, Code, Heading1, Heading2, Heading3, ImageComponent, Italic, Link, Text, NumberedList, Underline } from "@/components";
import { CodeInputValue } from "@sanity/code-input";
import { TSanityImageProps } from "./image/image.dts";

// The PortableTextComponentProps Generic widens the type of 'value' too much
interface PortableSanityImageProps extends PortableTextComponentProps<TSanityImageProps['value']> {
  value: TSanityImageProps['value'];
}

const portableTextComponents = {
  types: {
    image: ({ value }: PortableSanityImageProps) => <ImageComponent value={value} />,
    code: ({ value }: PortableTextComponentProps<CodeInputValue>) => <Code code={value.code} language={value.language} />,
  },
  block: {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    normal: Text,
    blockquote: Blockquote,
  },
  marks: {
    b: ({ children }: PortableTextMarkComponentProps) => children ? <Bold>{children}</Bold> : null,
    i: ({ children }: PortableTextMarkComponentProps) => children ? <Italic>{children}</Italic> : null,
    underline: ({ children }: PortableTextMarkComponentProps) => children ? <Underline>{children}</Underline> : null,
    link: Link as PortableTextMarkComponent
  },
  // lists: {
  //   bullet:  ({children}: { children: React.ReactNode }) => BulletList,
  //   number:  ({children}: { children: React.ReactNode }) => children ? NumberedList : null,
  // },
};




// FunctionComponent<PortableTextMarkComponentProps<any>>
export default function Main({ value }: { value: any }) {
  return (
    <div className="prose py-4">
      <PortableText value={value} components={portableTextComponents} />
    </div>
  )
}