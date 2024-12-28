'use client'
import { PortableText, PortableTextBlock, PortableTextBlockComponent, PortableTextComponent, PortableTextComponentProps, PortableTextMarkComponent, PortableTextMarkComponentProps, PortableTextProps } from "next-sanity";
import { Blockquote, Bold, BulletList, Code, Heading1, Heading2, Heading3, ImageComponent, Italic, Link, NormalText, NumberedList, Underline } from "@/components";
import { CodeInputValue } from "@sanity/code-input";
import { TSanityImageProps } from "./image/image.dts";
import { Stack } from "@sanity/ui";

// The PortableTextComponentProps Generic widens the type of 'value' too much
interface PortableSanityImageProps extends PortableTextComponentProps<TSanityImageProps['value']> {
  value: TSanityImageProps['value'];
}

const portableTextComponents = {
    types: {
      image: ({value}: PortableSanityImageProps) => <ImageComponent value={value}/>,
      code: ({value}: PortableTextComponentProps<CodeInputValue>) => <Code code={value.code} language={value.language} />,
    },
    block: {
      h1:  Heading1 as PortableTextBlockComponent,
      h2:  Heading2 as PortableTextBlockComponent,
      h3:  Heading3 as PortableTextBlockComponent,
      normal:  NormalText as PortableTextBlockComponent,
      blockquote:  Blockquote as PortableTextBlockComponent,
    },
    marks: {
      b:  ({children}: PortableTextMarkComponentProps) => children ? <Bold>{children}</Bold> : null,
      i:  ({children}: PortableTextMarkComponentProps) => children ? <Italic>{children}</Italic> : null,
      underline:  ({children}: PortableTextMarkComponentProps) => children ? <Underline>{children}</Underline> : null,
      link: Link as PortableTextMarkComponent
    },
    // lists: {
    //   bullet:  ({children}: { children: React.ReactNode }) => BulletList,
    //   number:  ({children}: { children: React.ReactNode }) => children ? NumberedList : null,
    // },
  };




  // FunctionComponent<PortableTextMarkComponentProps<any>>
export default function Main({value}: {value: any}){
    return (
      <Stack className="prose py-4">
        <PortableText value={value} components={portableTextComponents} />
      </Stack>
    )
}