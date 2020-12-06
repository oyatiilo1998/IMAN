/* eslint-disable no-undef */
const category = {
    path: '/category',
    name: 'category',
    hideChildrenInMenu: true,
    redirect: '/category/list',
    meta: { title: 'category', keepAlive: true, icon: 'folder-open', permission: [ 'dashboard' ] },
      children: [
        {
            path: '/category/list',
            name: 'category-list',
            component: () => import('../../custom/Category'),
            meta: { title: 'Список category', keepAlive: true }
            // meta: { title: 'cms.settings.forms', keepAlive: true, permission: [ 'dashboard' ] }
        },
        {
          path: '/category/create',
          name: 'new-category',
          component: () => import('../../custom/Category/Form'),
          meta: { title: 'Новая category', keepAlive: true }
          // meta: { title: 'cms.settings.forms', keepAlive: true, permission: [ 'dashboard' ] }
      },
      {
        path: '/category/update/:id',
        name: 'edit-category',
        component: () => import('../../custom/Category/Form'),
        meta: { title: 'Изменить category', keepAlive: true }
        // meta: { title: 'cms.settings.forms', keepAlive: true, permission: [ 'dashboard' ] }
    }
    ]
  }

export default category
