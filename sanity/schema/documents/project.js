import { Rule } from "postcss"



export default {

    name: "projectPost",
    title: "Project Post",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),

        },
        {
            name: "slug",
            title: "Slung",
            type: "slug",
            validation: (Rule) => Rule.required(),
            options: {
               source: "title",
               maxLength: 96, 
            }
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "dateStarted",
            title: "Date Started",
            type: "date",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "inProgess",
            title: "In Progess",
            type: "boolean",
            validation: (Rule) => Rule.required(),

        },
        {
            name: "image",
            title: "Image",
            type: "image",
            validation: (Rule) => Rule.required(),
            options: {
                hotspot: true,
            },
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {type: "block" },
                {
                    type: "image",
                },
                {
                    type:"code"

                },

            ],
        },
    ],
}