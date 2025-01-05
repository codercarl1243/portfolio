import { defineField, defineType } from 'sanity'
import { CiImageOn } from "react-icons/ci";

export const CustomImage = defineType({
    name: 'CustomImage',
    title: 'Image',
    type: 'image',
    icon: CiImageOn,
    fields: [
        defineField({
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            validation: rule => rule.custom((value, context) => {
                const parent = context?.parent as { asset?: { _ref?: string } }

                return !value && parent?.asset?._ref ? 'Alt text is required when an image is present' : true
            }),
        })
    ]
})