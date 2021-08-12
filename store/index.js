import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex)

export const state = {
  person: {
    title: '',
    firstName: '',
    lastName: ''
  },
  contact: {
    email: '',
    phone: '',
    postcode: ''
  }
}

export const mutations = {
  updatePerson (state, payload) {
    state.person = payload
  },
  updateEmail (state, payload) {
    state.contact.email = payload
  },
  updatePostcode (state, payload){
    state.contact.postcode = payload
  }
}
// are these being used?
export const actions = {
  updatePerson({ commit }, state) {
    console.log(state)
    commit('updatePerson', state)
  },
  updateEmail({commit}, state){
    commit('updateEmail', state)
  }
}
export const getters = {

}

export const store = new Vuex.Store({
  state : state,
  mutations : mutations
})