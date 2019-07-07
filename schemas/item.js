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
      name: "image1",
      title: "Image 1",
      type: "image",
      validation: Rule => Rule.required()
    },
    {
      name: "image2",
      title: "Image 2",
      type: "image",
    },
    {
      name: "description",
      title: "Item Description",
      type: "blockContent",
    },
    {
      title: 'Variants',
      name: 'variants',
      type: 'array',
      of: [
        {
          title: 'Variant',
          type: 'productVariant'
        }
      ]
    },
    {
      name: "price",
      title: "Item Price (GBP)",
      type: "number",
      validation: Rule => Rule.required()
    },
    {
      name: "specialPrice",
      title: "Special Item Price (GBP)",
      type: "number",
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
