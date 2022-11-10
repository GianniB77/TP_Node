<script setup>
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
</script>

<template>
  <main>
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
  </main>
</template>

