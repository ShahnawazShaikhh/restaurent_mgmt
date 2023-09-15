<template>



    <img  class="logo" src="../assets/foodlogo.jpg" />
    <h1>Login Here</h1>

    <div class="register">
        <input type="text"  v-model="name" placeholder="Enter Username" />
    
        <input type="password"  v-model="password"  placeholder="Enter Password" />
        <button  v-on:click="Login" >Login</button>
     

    </div>

</template>

<script>
import axios from 'axios'

export default{
    name:'Login',
    data(){

        return
        {
            name:'';
            password:''


        }
    },

    methods:{
       async Login()
        {
            
            let result = await axios.post( "http://localhost:3000/user",{ email:this.email,password:this.password,name:this.name});
            console.warn(result);
            if(result.status==201) 
            {
                // alert("sign-up done");
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'Home'})
            }
        }
    },
    // mounted()
    // {
    //     let user = localStorage.getItem('user-info');
    //     if(user)
    //     {
    //         this.$router.push({name:'Login'})

    //     }
    // }


}


</script>

<style>

.logo{

    width: 200px;
}
.register input{

    width:300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}

.register button{

    height: 40px;
    width: 320px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
}

</style>