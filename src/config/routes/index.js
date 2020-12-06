
import Category from './category'
import Product from './product'

const children = [
  Category,
  Product
]

export default children.map(el => ({ ...el,
component: {
    name: 'RouteView',
    render: (h) => h('router-view')
  }
}))
