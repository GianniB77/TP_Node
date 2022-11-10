<template>
    <div style="width: 100px; margin: 10px; text-align: center;">
        <h1>Register</h1>
        <label>Email adress :</label>
        <input type="email" v-model="emailR">
        <label>Password :</label>
        <input type="password" v-model="passwordR">
        <button type="button" class="btn btn-success" v-on:click="register">Register</button>
    </div>
</template>

<script>
    import axios from "axios";

    
    export default {
        data() {
            return {
                emailR: null,
                passwordR: null
            }
        },
        methods: {
            async register () {
                // console.log(`Email: ${this.email}, pw: ${this.password}.`);
                let headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    "Access-Control-Allow-Origin": "**",
                    'Accept': '**'
                }
                let response = await axios.post("http://localhost:3000/user/register", {email : this.emailR, password : this.passwordR}, 
                headers)
                let response2 = await axios.post("http://localhost:3000/user/login", {email : this.emailR, password : this.passwordR}, 
                headers)
                    .then((response2) => {
                        let token = response2.data.token;
                        localStorage.setItem('blogjwttoken', token);
                        console.log(localStorage.getItem('blogjwttoken'));
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