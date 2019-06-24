export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Article Title",
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
    // {
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}]
    // },
    {
      name: "description",
      title: "Article Description",
      type: "text",
      validation: Rule => Rule.required().max(300)
    },
  ],

  orderings: [
    {
      title: 'Publish Date',
      name: 'publishedAtDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
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
