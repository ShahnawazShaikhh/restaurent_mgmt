
<template>

    <Header/>

    <h1>Hello {{name}}, Welcome to Homepage</h1>
    <table class="center" border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Actions</td>

        </tr>
        <tr v-for="item in restaurant "  :key="item.id" >

            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.contact}}</td>
            <td>{{item.address}}</td>
            <td>

                <router-link class="update-link" :to="'/update/'+item.id">
                    <button class="button-style">Update</button>
                </router-link>

            
                <button   v-on:click="deleteRestaurant(item.id)" class="button-style">Delete</button>
            </td>


        </tr>



    </table>

</template>


<script>
import axios from 'axios';

import Header from './Header.vue';
export default{

    name:'Home',
    data()
    {

        return{

            name:'',
            restaurant:[],
        }
       

    },
    components:{
        Header


    },

    methods:{

       async deleteRestaurant(id){

            let result = await axios.delete("http://localhost:3000/restaurant/"+id);
            console.warn(result)
            if(result.status==200)
            {


            }

        }
       
    },







   async mounted()
    {
        let user = localStorage.getItem('user-info');
        this.name= JSON.parse(user).name;
        
        if(!user)
        {
            this.$router.push({name:'/'})

        }
        let result = await axios.get("http://localhost:3000/restaurant");
        console.warn(result)
        this.restaurant=result.data;
       
    }
}


</script>
<style>

td{

    width: 160px;
    height: 40px;
}

.center {
  margin-left: auto;
  margin-right: auto;
}
.update-link {
    margin-right: 10px; 
}






.button-style {
  display: inline-block;
  padding: 5px 10px;
  background-color: #007bff; 
  color: #fff; 
  border: none;
  border-radius: 5px;
}



</style>