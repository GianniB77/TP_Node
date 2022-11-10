

<template>
    <div v-for="post of postList" class="post">
            <h3>{{post.title}}</h3>
            <p>{{post.content}}</p>
    </div>
</template>

<style scoped>
    .post {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 5px;
        margin-top: 5px;
        border-bottom: 1px solid darkgrey;
    }

    .post h3 {
        width: 30%;
    }

    .post p {
        width: 69%;
    }

    
</style>

<script>
    import axios from "axios";
    
    export default {
        data() {
            return {
                postList: []
            }
        },
        methods: {
            async getPosts () {
                // console.log(`Email: ${this.email}, pw: ${this.password}.`);
                axios.get("http://localhost:3000/posts")
                .then((response) => {
                    //console.log(response.data);
                    this.postList = response.data;
                }) ;           
            },
            isConnected () {
                if(localStorage.getItem('blogjwttoken') == null) {
                    this.$router.push('/')
                }
            }

        },
        mounted() {
            this.getPosts();
            this.isConnected();
        },
    }
</script>