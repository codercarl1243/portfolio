import { defineArrayMember, defineType } from "sanity"
import { textStyles } from "./Style.text"
import { decoratorStyles } from "./Style.decorator"
import { listStyles } from "./Style.list"
import { annotationStyles } from "./Style.annotation"
import { code } from "./Style.code"
import { image } from "./Style.image"



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
                annotations: annotationStyles
            },
            styles: textStyles
        }),
        image,
        code
    ]
})