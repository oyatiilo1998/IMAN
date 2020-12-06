/* eslint-disable no-undef */
const retailer = {
    path: '/product',
    name: 'product',
    hideChildrenInMenu: true,
    redirect: '/product/list',
    meta: { title: 'Mahsulot', keepAlive: true, icon: 'folder-open', permission: [ 'dashboard' ] },
      children: [
        {
            path: '/product/list',
            name: 'product-list',
            component: () => import('../../custom/Product'),
            meta: { title: 'Список product', keepAlive: true }
            // meta: { title: 'cms.settings.forms', keepAlive: true, permission: [ 'dashboard' ] }
        },
        {
          path: '/product/create',
          name: 'new-product',
          component: () => import('../../custom/Product/Form'),
          meta: { title: 'Новая product', keepAlive: true }
          // meta: { title: 'cms.settings.forms', keepAlive: true, permission: [ 'dashboard' ] }
      },
      {
        path: '/product/update/:id',
        name: 'edit-product',
        component: () => import('../../custom/Product/Form'),
        meta: { title: 'Изменить product', keepAlive: true }
        // meta: { title: 'cms.settings.forms', keepAlive: true, permission: [ 'dashboard' ] }
    }
    ]
  }

export default retailer
