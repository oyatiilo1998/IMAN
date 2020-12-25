export function routeGenerate (object) {
    const capital = (object.name.charAt(0).toUpperCase() + object.name.slice(1).toLowerCase())
    const routejs = (`const ${object.name} = {
    path: '/${object.name}',
    name: '${object.name}',
    hideChildrenInMenu: true,
    redirect: '/${object.name}/list',
    meta: { title: '${object.name}', keepAlive: true, icon: '${object.icon}', permission: [ '${object.name}' ] },
      children: [
        {
            path: '/${object.name}/list',
            name: '${object.name}-list',
            component: () => import('../../custom/${capital}'),
            meta: { title: '${capital}List', keepAlive: true }
            // meta: { title: 'cms.settings.forms', keepAlive: true, permission: [ '${object.name}' ] }
        },
        {
          path: '/${object.name}/create',
          name: 'new-${object.name}',
          component: () => import('./../custom/${capital}/Form'),
          meta: { title: '${capital}Add', keepAlive: true, permission: [ '${object.name}' ] }
      },
      {
        path: '/${object.name}/update/:id',
        name: 'edit-${object.name}',
        component: () => import('./../custom/${capital}/Form'),
        meta: { title: '${capital}Update', keepAlive: true, permission: [ '${object.name}' ] }
    }
    ]
  }

export default ${object.name}`)
return routejs
}
