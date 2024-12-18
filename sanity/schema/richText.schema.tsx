import { BlockStyleDefinition, defineArrayMember, defineType } from 'sanity'
import { CiImageOn } from "react-icons/ci";
import { GrBold, GrCode, GrItalic, GrUnderline } from "react-icons/gr";
import { Blockquote, Bold, Heading1, Heading2, Heading3, Heading4, Italic, NormalText, Underline } from '@/components/components.common';

const textTypes: BlockStyleDefinition[] = [
    { title: 'p', value: 'normal', component: ({ children }) => <NormalText>{children}</NormalText> },
    { title: 'H1', value: 'h1', component: ({ children }) => <Heading1>{children}</Heading1> },
    { title: 'H2', value: 'h2', component: ({ children }) => <Heading2>{children}</Heading2> },
    { title: 'H3', value: 'h3', component: ({ children }) => <Heading3>{children}</Heading3> },
    { title: 'H4', value: 'h4', component: ({ children }) => <Heading4>{children}</Heading4> },
    { title: 'Quote', value: 'blockquote', component: ({ children }) => <Blockquote>{children}</Blockquote> },
    { title: 'small', value: 'small', icon: GrItalic, component: ({ children }) => <small>{children}</small> },

]

const textStyles: BlockStyleDefinition[] = [
    { title: 'bold', value: 'b', icon: GrBold, component: ({ children }) => <Bold>{children}</Bold> },
    { title: 'italic', value: 'i', icon: GrItalic, component: ({ children }) => <Italic>{children}</Italic> },
    { title: 'Underline', value: 'underline', icon: GrUnderline, component: ({ children }) => <Underline>{children}</Underline> },
]

const listTypes: BlockStyleDefinition[] = [
    { title: 'Numbered', value: 'number' },
    { title: 'Bullet', value: 'bullet' },
]

const image = defineArrayMember({ type: 'image', icon: CiImageOn })
// on / off For code
const code = defineArrayMember({type: 'code', icon: GrCode})

export const richText = defineType({
    name: 'richText',
    title: 'Rich Text',
    type: 'array',
    of: [
        defineArrayMember({
            type: 'block',
            lists: listTypes,
            marks: {
                decorators: textStyles
            },
            styles: textTypes
        }),
        image,
        code
    ]
})