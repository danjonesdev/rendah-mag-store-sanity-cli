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
      to: { type: "category" }
    },
    {
      name: "collection",
      title: "Collection",
      type: "reference",
      to: { type: "collection" }
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
      title: "Variants",
      name: "variants",
      type: "array",
      of: [
        {
          title: "Variant",
          type: "productVariant"
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
      name: "recurringType",
      title: "Recurring Payment Type",
      type: "string",
      options: {
        list: [
          { title: "None", value: "None" },
          { title: "Day", value: "Day" },
          { title: "Week", value: "Week" },
          { title: "Month", value: "Month" },
          { title: "Year", value: "Year" }
        ],
        layout: "radio"
      },
      validation: Rule => Rule.required()
    },
    {
      name: "recurringInterval",
      title: "Recurring Payment Interval",
      description: "If no Recurring Payment Type, use '0'",
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
    }
  }
};
