import { NormalText, Heading1, Heading2, Heading3, Heading4, Blockquote } from "@/components";
import { GrItalic } from "react-icons/gr";
import { BlockDecoratorDefinition } from "sanity";

export const textStyles: BlockDecoratorDefinition[] = [
    { title: 'p', value: 'normal', component: ({ children }) => <NormalText>{children}</NormalText> },
    { title: 'H1', value: 'h1', component: ({ children }) => <Heading1>{children}</Heading1> },
    { title: 'H2', value: 'h2', component: ({ children }) => <Heading2>{children}</Heading2> },
    { title: 'H3', value: 'h3', component: ({ children }) => <Heading3>{children}</Heading3> },
    { title: 'H4', value: 'h4', component: ({ children }) => <Heading4>{children}</Heading4> },
    { title: 'Quote', value: 'blockquote', component: ({ children }) => <Blockquote>{children}</Blockquote> },
    { title: 'small', value: 'small', icon: GrItalic, component: ({ children }) => <small>{children}</small> },
]