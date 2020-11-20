export const state = () => ({
  token: null,
  user: null,
})

export const getters = {}

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
    this.$cookies.set('token', state.token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 300,
    })
  },
  SET_USER(state, user) {
    state.user = user
  },
  LOGOUT(state) {
    state.token = null
    state.user = null
    this.$cookies.remove('token')
  },
}

export const actions = {}
