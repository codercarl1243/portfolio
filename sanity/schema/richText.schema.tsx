import { BlockStyleDefinition, defineArrayMember, defineType } from 'sanity'
import { CiImageOn } from "react-icons/ci";
import { GrBold, GrCode, GrItalic, GrUnderline } from "react-icons/gr";

const textTypes: BlockStyleDefinition[] = [
    { title: 'p', value: 'normal', component: ({ children }) => <p className="font-main text-base">{children}</p> },
    { title: 'H1', value: 'h1', component: ({ children }) => <h1 className="font-accent font-bold text-4xl">{children}</h1> },
    { title: 'H2', value: 'h2', component: ({ children }) => <h2 className="font-accent font-bold text-3xl">{children}</h2> },
    { title: 'H3', value: 'h3', component: ({ children }) => <h3 className="font-accent font-bold text-2xl">{children}</h3> },
    { title: 'H4', value: 'h4', component: ({ children }) => <h4 className="font-accent font-bold text-xl">{children}</h4> },
    { title: 'Quote', value: 'blockquote', component: ({ children }) => <blockquote>{children}</blockquote> },
    { title: 'small', value: 'small', icon: GrItalic, component: ({ children }) => <small>{children}</small> },

]

const textStyles: BlockStyleDefinition[] = [
    { title: 'bold', value: 'b', icon: GrBold, component: ({ children }) => <b>{children}</b> },
    { title: 'italic', value: 'i', icon: GrItalic, component: ({ children }) => <i>{children}</i> },
    { title: 'Code', value: 'code', icon: GrCode },
    { title: 'Underline', value: 'underline', icon: GrUnderline, component: ({ children }) => <span style={{ textDecoration: 'underline' }}>{children}</span> },
]

const listTypes: BlockStyleDefinition[] = [
    { title: 'Numbered', value: 'number' },
    { title: 'Bullet', value: 'bullet' },
]

const image = defineArrayMember({ type: 'image', icon: CiImageOn })

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
        image
        
    ]
})