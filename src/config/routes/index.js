
import Constructor from './constructor'

const children = [
  Constructor
]

export default children.map(el => ({ ...el,
component: {
    name: 'RouteView',
    render: (h) => h('router-view')
  }
}))
