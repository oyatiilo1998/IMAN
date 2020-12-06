/* eslint-disable no-undef */
const retailer = {
    path: '/retailer',
    name: 'retailer',
    hideChildrenInMenu: true,
    redirect: '/retailer/list',
    meta: { title: 'retailer', keepAlive: true, icon: 'folder-open', permission: [ 'dashboard' ] },
      children: [
        {
            path: '/retailer/list',
            name: 'retailer-list',
            component: () => import('../../custom/Retailer'),
            meta: { title: 'Список retailer', keepAlive: true }
            // meta: { title: 'cms.settings.forms', keepAlive: true, permission: [ 'dashboard' ] }
        },
        {
          path: '/retailer/create',
          name: 'new-retailer',
          component: () => import('../../custom/Retailer/Form'),
          meta: { title: 'Новая retailer', keepAlive: true }
          // meta: { title: 'cms.settings.forms', keepAlive: true, permission: [ 'dashboard' ] }
      },
      {
        path: '/retailer/update/:id',
        name: 'edit-retailer',
        component: () => import('../../custom/Retailer/Form'),
        meta: { title: 'Изменить retailer', keepAlive: true }
        // meta: { title: 'cms.settings.forms', keepAlive: true, permission: [ 'dashboard' ] }
    }
    ]
  }

export default retailer
