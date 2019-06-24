export default {
  name: "item",
  title: "Item",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Item Title",
      type: "string",
      validation: Rule => Rule.required().max(60)
    },
    {
      name: "slug",
      title: "URL",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "category" },
      validation: Rule => Rule.required()
    },
    {
      name: "collection",
      title: "Collection",
      type: "reference",
      to: { type: "collection" },
      validation: Rule => Rule.required()
    },
    {
      name: "publishedAt",
      title: "Publish Date",
      type: "datetime",
      validation: Rule => Rule.required()
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: Rule => Rule.required()
    },
    {
      name: "description",
      title: "Item Description",
      type: "text",
      validation: Rule => Rule.required().max(300)
    },
    {
      name: "price",
      title: "Item Price (GBP)",
      type: "number",
      validation: Rule => Rule.required()
    },
    {
      name: "quantity",
      title: "Item Quantity",
      type: "number",
      validation: Rule => Rule.required()
    },
    {
      name: "recurringType",
      title: "Recurring Payment Type",
      type: "string",
      options: {
        list: [
          { title: "None", value: "none" },
          { title: "Day", value: "day" },
          { title: "Week", value: "week" },
          { title: "Month", value: "month" },
          { title: "Year", value: "year" }
        ],
        layout: "radio"
      },
      validation: Rule => Rule.required()
    },
    {
      name: "recurringInterval",
      title: "Recurring Payment Interval",
      type: "number",
      validation: Rule => Rule.required()
    }
  ],

  orderings: [
    {
      title: "Publish Date",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }]
    }
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "image"
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      });
    }
  }
};