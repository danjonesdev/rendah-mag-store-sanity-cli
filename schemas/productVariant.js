export default {
  title: 'Product variant',
  name: 'productVariant',
  type: 'object',
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "One Size", value: "oneSize" },
          { title: "X-Small", value: "xSmall" },
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
          { title: "X-Large", value: "xLarge" }
        ],
      },
      validation: Rule => Rule.required()
    },
    {
      name: "quantity",
      title: "Item Quantity",
      type: "number",
      validation: Rule => Rule.required()
    }
  ]
}
