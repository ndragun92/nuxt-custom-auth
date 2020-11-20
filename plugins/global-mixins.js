import Vue from 'vue'

Vue.mixin({
  computed: {
    _user() {
      return this.$store.state.auth.user
    },
    _token() {
      return this.$store.state.auth.token
    },
    _loggedIn() {
      return this._user
    },
  },
  methods: {
    async $logout() {
      await this.$store.commit('auth/LOGOUT')
      await this.$router.push('/')
    },
  },
})
