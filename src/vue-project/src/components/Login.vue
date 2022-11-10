<template>
    <div style="width: 100px; margin: 10px; text-align: center;">
        <h1>Login</h1>
        <label>Email adress :</label>
        <input type="email" v-model="email">
        <label>Password :</label>
        <input type="password" v-model="password">
        <button type="button" class="btn btn-success" v-on:click="login">Log In</button>
    </div>
    
</template>

<script>
    import axios from "axios";

    
    export default {
        data() {
            return {
                email: null,
                password: null
            }
        },
        methods: {
            async login () {
                // console.log(`Email: ${this.email}, pw: ${this.password}.`);
                let headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    "Access-Control-Allow-Origin": "**",
                    'Accept': '**'
                }
                let response = await axios.post("http://localhost:3000/user/login", {email : this.email, password : this.password}, 
                headers)
                    .then((response) => {
                        let token = response.data?.token ? response.data.token : null;
                        localStorage.setItem('blogjwttoken', token);
                        this.$router.push('/posts')
                    })
                    .catch((error) => {
                        console.log(error);
                        localStorage.removeItem('blogjwttoken');
                    });
                
                return ;
            }
        }
    }
</script>