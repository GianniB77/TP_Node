<template>
  <div class="container" style="margin: 55px 10px; text-align: center;">
      <h1>Create a Post</h1>
      <div class="input-group mb-3">
        <span class="input-group-text">Title (required)</span>
        <input type="text" class="form-control" placeholder="Content" v-model="title">
      </div>
      <div class="input-group">
        <span class="input-group-text">Content</span>
        <textarea class="form-control" v-model="content"></textarea>
      </div>
      <button type="button" class="btn btn-success" v-on:click="create">Create post</button>
  </div>
</template>

<script>
  import axios from "axios";

  
  export default {
      data() {
          return {
              title: null,
              content: null
          }
      },
      methods: {
          async create () {
              let headers = {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  "Access-Control-Allow-Origin": "**",
                  'Accept': '**',
                  'Authorization': localStorage.getItem('blogjwttoken')
              }
              let response = await axios.post("http://localhost:3000/posts", {title : this.title, content : this.content}, 
              {headers})
                  .then((response) => {
                      this.$router.push('/posts')
                  })
                  .catch((error) => {
                      console.log(error);
                  });
              
              return ;
          },
          isConnected () {
                if(localStorage.getItem('blogjwttoken') == null) {
                    this.$router.push('/')
                }
            }
      },
        mounted() {
            this.isConnected();
        }
  }
</script>