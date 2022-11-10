<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.png"
      width="125"
      height="125"
    />
    <nav>
      <RouterLink to="/posts">Posts</RouterLink>
      <RouterLink to="/CreatePost">Create a Post</RouterLink>
      <a @click="disconnect">Sign Off</a>
    </nav>
  </header>
  
  <router-view/>
</template>

<script>
    export default {
        methods: {
            disconnect () {
              localStorage.removeItem('blogjwttoken');
              this.$router.push('/');
              return ;
            }
        }
    }
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active, nav a {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover, nav a {
  background-color: transparent;
}

a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: underline;
  
}

nav a:first-of-type {
  border: 0;
}
</style>