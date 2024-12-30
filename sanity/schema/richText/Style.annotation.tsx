import { defineArrayMember } from "sanity";


export const annotationStyles = [
    defineArrayMember({
        name: 'link',
        type: 'object',
        title: 'Link',
        fields: [
            {
                name: 'text',
                type: 'string',
                title: 'Link Text',
                description: 'The text that will be displayed for the link.',
                options: {
                    wordCount: true,
                },
                validation: (Rule) =>
                    Rule.required()
                        .min(2)
                        .max(30)
                        .error('required characters between 5 and 30'),
            },
            {
                name: 'linkType',
                type: 'string',
                title: 'Link Type',
                options: {
                    list: [
                        { title: 'External', value: 'external' },
                        { title: 'Internal', value: 'internal' },
                    ],
                    layout: 'radio',
                },
                initialValue: 'external',
            },
            {
                name: 'href',
                type: 'url',
                title: 'External URL',
                hidden: ({ parent }) => parent?.linkType !== 'external',
                validation: (Rule) =>
                    Rule.uri({
                        allowRelative: false,
                        scheme: ['http', 'https', 'mailto', 'tel'],
                    })
                        .required()
                        .error('A valid external URL is required for external links.'),
            },
            {
                name: 'reference',
                type: 'reference',
                title: 'Internal Reference',
                to: [
                    { type: 'post' },
                ],
                hidden: ({ parent }) => parent?.linkType !== 'internal',
            }
        ],
    })
]