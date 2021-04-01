/* eslint-disable no-undef */
const retailer = {
    path: '/constructor',
    name: 'constructor',
    hideChildrenInMenu: true,
    redirect: '/constructor/create',
    meta: { title: 'Constructor', keepAlive: true, icon: 'folder-open', permission: [ 'dashboard' ] },
      children: [
        {
          path: '/constructor/create',
          name: 'new-constructor',
          component: () => import('../../custom/Constructor/Form'),
          meta: { title: 'Новая product', keepAlive: true }
      }
    ]
  }

export default retailer
