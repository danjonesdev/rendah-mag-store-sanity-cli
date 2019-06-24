import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import category from './category'
import collection from './collection'
import item from './item'
import productVariant from './productVariant'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat(
    [
      item,
      category,
      collection,
      productVariant
    ]
  )
})
