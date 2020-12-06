import storage from 'store'
import { login, logout } from '@/api/login'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { welcome } from '@/utils/util'

const user = {
  state: {
    token: '',
    name: '',
    welcome: '',
    avatar: '',
    roles: [],
    info: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { name, welcome }) => {
      state.name = name
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          const result = response.result
          storage.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
          commit('SET_TOKEN', result.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        var result = {}
        var roleObj = {}
        result = {
          'id': '4291d7da9005377ec9aec4a71ea837f',
          'name': 'Dell',
          'status': 1,
          'telephone': '',
          'lastLoginIp': '27.154.74.117',
          'lastLoginTime': 1534837621348,
          'creatorId': 'admin',
          'createTime': 1497160610259,
          'deleted': 0,
          'roleId': 'admin',
          'role': {}
        }

        roleObj = {
          'id': 'admin',
          'status': 1,
          'creatorId': 'system',
          'createTime': 1497160610259,
          'deleted': 0,
          'permissions': [{
            'roleId': 'admin',
            'permissionId': 'dashboard',
            'permissionName': '仪表盘',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'legal-users',
            'permissionName': '异常页面权限',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'operator',
            'permissionName': '异常页面权限',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'pages',
            'permissionName': '异常页面权限',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'reset',
            'permissionName': '异常页面权限',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'buttons',
            'permissionName': '异常页面权限',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'natural-users',
            'permissionName': '结果权限',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'system-users',
            'permissionName': '结果权限',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'client',
            'permissionName': '结果权限',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'birthday',
            'permissionName': '结果权限',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'nickname',
            'permissionName': '结果权限',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'token',
            'permissionName': '结果权限',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'black-letter',
            'permissionName': '结果权限',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'sms-limit',
            'permissionName': '结果权限',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'stop',
            'permissionName': '结果权限',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'billing-users',
            'permissionName': '结果权限',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'roles',
            'permissionName': '结果权限',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'add_page',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'sms',
            'permissionName': '详细页权限',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'sms-types',
            'permissionName': '详细页权限',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'tariffs',
            'permissionName': '详细页权限',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'transactions',
            'permissionName': '详细页权限',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"query","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'query',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }, {
            'roleId': 'admin',
            'permissionId': 'settings',
            'permissionName': '权限管理',
            'actions': '[{"action":"add","defaultCheck":false},{"action":"get","defaultCheck":false},{"action":"update","defaultCheck":false},{"action":"delete","defaultCheck":false}]',
            'actionEntitySet': [{
              'action': 'add',
              'defaultCheck': false
            }, {
              'action': 'get',
              'defaultCheck': false
            }, {
              'action': 'update',
              'defaultCheck': false
            }, {
              'action': 'delete',
              'defaultCheck': false
            }],
            'actionList': null,
            'dataAccess': null
          }]
        }
        result.role = roleObj
          if (result.role && result.role.permissions.length > 0) {
            const role = result.role
            role.permissions = result.role.permissions
            role.permissions.map(per => {
              if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                const action = per.actionEntitySet.map(action => { return action.action })
                per.actionList = action
              }
            })
            role.permissionList = role.permissions.map(permission => { return permission.permissionId })
            console.log(result.role)
            commit('SET_ROLES', result.role)
            commit('SET_INFO', result)
            resolve(result)
          } else {
            reject(new Error('getInfo: roles must be a non-null array !'))
          }

          commit('SET_NAME', { name: result.name, welcome: welcome() })
          commit('SET_AVATAR', result.avatar)
      })
    },

    // 登出
    Logout ({ commit, state }) {
      return new Promise((resolve) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          storage.remove(ACCESS_TOKEN)
          resolve()
        }).catch(() => {
          resolve()
        }).finally(() => {
        })
      })
    }

  }
}

export default user
