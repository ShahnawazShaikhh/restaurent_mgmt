
<template>

    <Header/>

    <h1>Hello {{ name }}, Welcome to Add Restaurant page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" >
        <input type="text" name="address" placeholder="Enter address"  v-model="restaurant.address">
        <input type="text" name="contact" placeholder="Enter contact"  v-model="restaurant.contact">
        <button type="button" v-on:click="addRestaurant">Add new Restaurant</button>



    </form>

</template>


<script>

import axios from 'axios';
import Header from './Header.vue';
export default{

    name:'Add',
    components:{
        Header
    },
    data()
    {
        return{
        restaurant :{
            name:'',
            address:'',
            contact:''


        }
      }


    },
    methods:{

      async  addRestaurant()
        {

            console.warn(this.restaurant)
            const result = await axios.post("http://localhost:3000/restaurant",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,
            });
            if(result.status==201)
            {

                this.$router.push({name:'Home'})


            }
        }


    },
    mounted()
    {
        let user = localStorage.getItem('user-info');
        this.name= JSON.parse(user).name;
        if(!user)
        {
            this.$router.push({name:'Login'})

        }
    }
}


</script>