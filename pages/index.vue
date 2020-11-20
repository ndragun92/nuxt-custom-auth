<template>
  <div class="container">
    <div>
      <h1 class="title">nuxt-custom-auth</h1>
      <div class="links">
        <a
          v-if="_loggedIn"
          role="button"
          class="button--grey"
          @click="$logout()"
        >
          Logout
        </a>
        <nuxt-link v-else to="/auth/login" class="button--grey"
          >Login</nuxt-link
        >
        <nuxt-link v-if="_loggedIn" to="/profile" class="button--green">
          User Profile (protected route)
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
