import qs from "qs"
import api from "../../api/amgur"

const state = {
    token: null
}

const getters = {
    isLoggedIn: state => !!state.token
}

const actions = {
    login: () => api.login(),
    finalizeLogin( { commit }, hash) {
        const query = qs.parse(hash.replace("#", ""))
        commit("setToken", query.access_token)
    },
    logout: ({ commit }) => {
        commit("setToken", null)
    }
}

const mutations = {
    setToken: (state, token) => {
        state.token = token
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}