import { defineField, defineType } from 'sanity'
import { HiDocumentText } from "react-icons/hi2";
import { CiImageOff } from "react-icons/ci";
import { DateInput } from '../components/date';

export const postType = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    icon: HiDocumentText,
    groups: [
        { name: 'details', title: 'Details' },
        { name: 'editorial', title: 'Editorial' },
    ],
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
            validation: (rule) => rule
                .required(),
            group: 'details',
        }),
        defineField({
            name: 'subheading',
            type: 'string',
            hidden: ({ document }) => !document?.heading,
            group: 'details',
        }),
        defineField({
            name: 'image',
            type: 'image',
            group: 'details',
        }),
        defineField({
            name: 'date',
            type: 'date',
            components: {input: DateInput},
            group: 'details'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: { source: 'heading' },
            validation: (rule) => rule
                .required()
                .error(`Required to generate a page on the website`),
            group: 'details',
        }),
        defineField({
            name: 'details',
            type: 'richText',
            group: 'editorial',
        }),
    ],
    preview: {
        select: {
            title: "heading",
            date: "date",
            media: "image",
        },
        prepare({ title, date, media }) {
            const titleFormatted = title || 'Untitled';
            const dateFormatted = date
                ? new Date(date).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                })
                : 'No date';

            return {
                title: titleFormatted,
                subtitle: dateFormatted,
                media: media || CiImageOff ,
            }
        }
    },
})