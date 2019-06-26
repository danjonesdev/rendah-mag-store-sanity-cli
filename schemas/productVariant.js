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
          { title: "One Size", value: "One Size" },
          { title: "X-Small", value: "X-Small" },
          { title: "Small", value: "Small" },
          { title: "Medium", value: "Medium" },
          { title: "Large", value: "Large" },
          { title: "X-Large", value: "X-Large" }
        ],
      },
      validation: Rule => Rule.required()
    },
    {
      name: "quantity",
      title: "Item Quantity",
      description: "The initial batch stock of this item",
      type: "number",
      validation: Rule => Rule.required()
    },
    {
      title: 'Sold out',
      name: 'soldOut',
      type: 'boolean'
    }
  ]
}
