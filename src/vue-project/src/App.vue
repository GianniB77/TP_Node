<script setup>
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
</script>

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
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>
  <div class="container" style="margin-top: 1rem; text-align: center">
    <div class="row ">
      <div class="col-sm">
        <Login/>
      </div>
      <div class="col-sm">
        <Register/>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  axios.get("localhost:3000/posts/");
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

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.content {
  padding: 2rem;
  display: flex;
  flex-wrap: nowrap;}
</style>
