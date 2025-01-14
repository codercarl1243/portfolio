import { CiImageOn } from "react-icons/ci";
import { defineField } from "sanity";

export const image = {     name: 'CustomImage',
    title: 'Image',
    type: 'image',
    icon: CiImageOn,
    fields: [
        defineField({
                name: 'variant',
                type: 'string',
                title: 'image Size',
                options: {
                    list: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'Hero', value: 'hero' },
                        { title: 'Banner', value: 'banner' },
                        { title: 'Figure', value: 'figure' },
                    ],
                    // Create a plugin for horizontal radio buttons / grid
                    layout: 'radio',
                },
                initialValue: 'normal',
            }),
            defineField({
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
                validation: rule => rule.custom((value, context) => {
                    const parent = context?.parent as { asset?: { _ref?: string } }
    
                    return !value && parent?.asset?._ref ? 'Alt text is required when an image is present' : true
                }),
            }),
        ]
}