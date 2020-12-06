
import Category from './category'
import Retailer from './retailer'
import Product from './product'

const children = [
  Category,
  Retailer,
  Product
]

export default children.map(el => ({ ...el,
component: {
    name: 'RouteView',
    render: (h) => h('router-view')
  }
}))
