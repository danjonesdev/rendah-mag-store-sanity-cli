export default {
  title: "Product variant",
  name: "productVariant",
  type: "object",
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
<<<<<<< HEAD
          { title: "One Size", value: "1-Size" },
          { title: "X-Small", value: "XS" },
          { title: "Small", value: "S" },
          { title: "Medium", value: "M" },
          { title: "Large", value: "L" },
          { title: "X-Large", value: "XL" },
          { title: "XX-Large", value: "XXL" },
        ],
=======
          { title: "One Size", value: "One Size" },
          { title: "X-Small", value: "X-Small" },
          { title: "Small", value: "Small" },
          { title: "Medium", value: "Medium" },
          { title: "Large", value: "Large" },
          { title: "X-Large", value: "X-Large" }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: "availability",
      title: "Availability",
      type: "string",
      options: {
        list: [
          { title: "Limited", value: "limited" },
          { title: "Unlimited", value: "unlimited" },
          { title: "Sold Out", value: "soldOut" }
        ]
>>>>>>> 73cd5e16b65f1a6c91c6c1b321127f934be4d40c
      },
      validation: Rule => Rule.required()
    },
    {
      name: "quantity",
      title: "Item Quantity",
      description: "The initial batch stock of this item (If applicable)",
      type: "number"
    }
  ]
};
