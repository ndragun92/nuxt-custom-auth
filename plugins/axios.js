export default (ctx) => {
  ctx.$axios.onRequest((config) => {
    const token = ctx.store.state.auth.token
    if (token) {
      config.headers.common.Authorization = token
    }
  })
}
