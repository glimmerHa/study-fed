import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: []
}
const mutations = {
    SET_ROLES: (state, roles) => {
        state.roles = roles
    }
}
const actions = {
    getInfo({commit,state}) {
        return new Promise((resolve, reject)=>{
            
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }