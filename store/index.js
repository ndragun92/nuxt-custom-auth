export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  async nuxtServerInit(store) {
    const token = this.$cookies.get('token')
    if (token) {
      try {
        const { data } = await this.$axios.$get('/api/me/user.json')
        await store.commit('auth/SET_TOKEN', token)
        await store.commit('auth/SET_USER', data.user)
      } catch (e) {
        await store.commit('auth/LOGOUT')
        alert('Error!')
      }
    } else {
      await store.commit('auth/LOGOUT')
    }
  },
}
