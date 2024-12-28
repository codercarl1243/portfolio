import { defineArrayMember, defineField, defineType } from 'sanity'
import type { BlockAnnotationDefinition, BlockDecoratorDefinition, BlockListDefinition, BlockMarksDefinition, BlockStyleDefinition } from 'sanity';
import { CiImageOn } from "react-icons/ci";
import { GrBold, GrCode, GrItalic, GrUnderline } from "react-icons/gr";
import { Blockquote, Bold, Heading1, Heading2, Heading3, Heading4, Italic, NormalText, Underline } from '@/components';

const textStyles: BlockDecoratorDefinition[] = [
    { title: 'p', value: 'normal', component: ({ children }) => <NormalText>{children}</NormalText> },
    { title: 'H1', value: 'h1', component: ({ children }) => <Heading1>{children}</Heading1> },
    { title: 'H2', value: 'h2', component: ({ children }) => <Heading2>{children}</Heading2> },
    { title: 'H3', value: 'h3', component: ({ children }) => <Heading3>{children}</Heading3> },
    { title: 'H4', value: 'h4', component: ({ children }) => <Heading4>{children}</Heading4> },
    { title: 'Quote', value: 'blockquote', component: ({ children }) => <Blockquote>{children}</Blockquote> },
    { title: 'small', value: 'small', icon: GrItalic, component: ({ children }) => <small>{children}</small> },

]

const decoratorStyles: BlockDecoratorDefinition[] = [
    { title: 'bold', value: 'b', icon: GrBold, component: ({ children }) => <Bold>{children}</Bold> },
    { title: 'italic', value: 'i', icon: GrItalic, component: ({ children }) => <Italic>{children}</Italic> },
    { title: 'Underline', value: 'underline', icon: GrUnderline, component: ({ children }) => <Underline>{children}</Underline> },
]

// const annotationStyles: BlockMarksDefinition["annotations"][] = [
const annotationStyles: BlockAnnotationDefinition[] = [
    {
        name: 'link',
        type: 'object',
        title: 'External link',
        fields: [
            {
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                    Rule.uri({
                        allowRelative: false,
                        scheme: ['http', 'https', 'mailto', 'tel'],
                    }),
            },
            {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean'
            }
        ]
    },
    {
        name: 'internalLink',
        type: 'object',
        title: 'Link Internal link',
        fields: [
            defineField({
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                    { type: 'post' },
                    // other types you may want to link to
                ]
            })
        ]
    }

]

const listStyles: BlockListDefinition[] = [
    { title: 'Numbered', value: 'number' },
    { title: 'Bullet', value: 'bullet' },
]

const image = defineArrayMember({ type: 'image', icon: CiImageOn })
const code = defineArrayMember({ type: 'code', icon: GrCode })

export const richText = defineType({
    name: 'richText',
    title: 'Rich Text',
    type: 'array',
    of: [
        defineArrayMember({
            type: 'block',
            lists: listStyles,
            marks: {
                decorators: decoratorStyles,
                annotations: annotationStyles as BlockMarksDefinition['annotations']
            },
            styles: textStyles
        }),
        image,
        code
    ]
})