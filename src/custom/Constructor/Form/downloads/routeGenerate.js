export function routeGenerate (object) {
    const capital = (object.name.charAt(0).toUpperCase() + object.name.slice(1).toLowerCase())
    const routejs = (`const ${object.name} = {
    path: '/${object.name.toLowerCase()}',
    name: '${object.name.toLowerCase()}',
    hideChildrenInMenu: true,
    redirect: '/${object.name.toLowerCase()}/list',
    meta: { title: '${object.name}', keepAlive: true, icon: '${object.icon}', permission: [ '${object.name.toLowerCase()}' ] },
      children: [
        {
            path: '/${object.name.toLowerCase()}/list',
            name: '${object.name.toLowerCase()}-list',
            component: () => import('../../custom/${capital}'),
            meta: { title: '${capital}List', keepAlive: true }
            // meta: { title: 'cms.settings.forms', keepAlive: true, permission: [ '${object.name.toLowerCase()}' ] }
        },
        {
          path: '/${object.name.toLowerCase()}/create',
          name: 'new-${object.name.toLowerCase()}',
          component: () => import('./../custom/${capital}/Form'),
          meta: { title: '${capital}Add', keepAlive: true, permission: [ '${object.name.toLowerCase()}' ] }
      },
      {
        path: '/${object.name.toLowerCase()}/update/:id',
        name: 'edit-${object.name.toLowerCase()}',
        component: () => import('./../custom/${capital}/Form'),
        meta: { title: '${capital}Update', keepAlive: true, permission: [ '${object.name.toLowerCase()}' ] }
    }
    ]
  }

export default ${object.name}`)
return routejs
}
