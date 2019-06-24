import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import category from './category'
import item from './item'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat(
    [
      item,
      category
    ]
  )
})
