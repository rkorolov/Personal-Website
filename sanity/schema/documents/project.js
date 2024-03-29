export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
    {
        name: "favorite",
        title: "Favorite",
        type: "boolean",
    },
    {
        name : "image",
        title: "Image",
        type: "image",
        validation: (Rule) => Rule.required(),
        options: {
            hotspot: true,
        },

    },
    {
        name: "description",
        title: "Description",
        type: "string",
        validation: (Rule) => Rule.required(),
    },
],
}