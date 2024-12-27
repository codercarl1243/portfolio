import { PortableText, PortableTextBlock, PortableTextBlockComponent, PortableTextComponent, PortableTextComponentProps, PortableTextMarkComponentProps, PortableTextProps } from "next-sanity";
import { Blockquote, Bold, BulletList, Code, Heading1, Heading2, Heading3, ImageComponent, Italic, Link, NormalText, NumberedList, Underline } from "./components.common";
import { CodeInputValue } from "@sanity/code-input";
import type { TSanityImageProps } from "@/components/image/image.dts";



const portableTextComponents = {
    types: {
      // image: ({value}: PortableTextComponentProps<typeof ImageComponent>) => value ? <ImageComponent sanityImageAsset={value.sanityImage} alt={value.alt}/> : null,
      image: ({value}: TSanityImageProps) => <ImageComponent value={value} />,
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
      link: ({ children, value }: PortableTextMarkComponentProps) => (value?.href && children) ? <Link href={value.href} children={children}/> : null
      // code:  ({children}: PortableTextComponentProps<typeof Code>) => children ? <Code>{children}</Code> : null,
    },
    // list: {
    //   bullet:  ({children}: { children: React.ReactNode }) => children ? BulletList : null,
    //   number:  ({children}: { children: React.ReactNode }) => children ? NumberedList : null,
    // },
  };




  // FunctionComponent<PortableTextMarkComponentProps<any>>
export default function Main({value}: {value: any}){
  // console.log("value", value)
    return (
      <div className="prose py-4">
        
        <PortableText value={value} components={portableTextComponents} />
      </div>
    )
}