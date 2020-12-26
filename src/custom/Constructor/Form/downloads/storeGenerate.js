
export function storeGenerate (object) {
    const capital = (object.name.charAt(0).toUpperCase() + object.name.slice(1).toLowerCase())
    const routejs = (`import request from '@/utils/request'
    const customUrl = '${object.customUrl}'
    const ${object.name} = {
        state: {
            ${object.name}Data: []
        },
        getters: {
          get${capital}: state => state.${object.name}Data
        },
        mutations: {
            SET_${object.name.toUpperCase()} (state, payload) {
                state.bonds = payload
            }
        },
        actions: {
          get${capital} ({ commit }, params) {
            return new Promise((resolve, reject) => {
            request({
                url: customUrl,
                method: 'get',
                params
            })
              .then(result => {
              commit('SET_${object.name.toUpperCase()}', result.${object.response_from_request})
              resolve(result)
            })
            .catch(error => {
              reject(error)
            })
          })
        },
        getSingle${capital} ({ commit }, id) {
          return new Promise((resolve, reject) => {
            request({
              url: customUrl + '/' + id,
              method: 'get'
            }).then(res => {
              resolve(res)
            }).catch(error => {
              reject(error)
            })
          })
        },
        post${capital} ({ commit }, data) {
          return new Promise((resolve, reject) => {
          request({
              url: customUrl,
              method: 'post',
              data: data
          })
            .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
        })
      },
      update${capital} ({ commit }, data) {
        return new Promise((resolve, reject) => {
        request({
            url: customUrl + '/' + data.id,
            method: 'put',
            data: data
        })
          .then(result => {
          resolve(result)
        })
        .catch(error => {
          reject(error)
        })
      })
    },
    delete${capital} ({ commit }, id) {
      return new Promise((resolve, reject) => {
        request({
            url: customUrl + '/' + id,
            method: 'delete'
        })
          .then(result => {
          resolve(result)
        })
        .catch(error => {
          reject(error)
        })
      })
    }
      }
    }
      export default ${object.name}`)
return routejs
}
