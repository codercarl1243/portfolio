import { defineArrayMember, defineType } from "sanity"
import { textStyles } from "./Style.text"
import { CiImageOn } from "react-icons/ci"
import { GrCode } from "react-icons/gr"
import { decoratorStyles } from "./Style.decorator"
import { listStyles } from "./Style.list"
import { annotationStyles } from "./Style.annotation"

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
                annotations: annotationStyles
            },
            styles: textStyles
        }),
        image,
        code
    ]
})