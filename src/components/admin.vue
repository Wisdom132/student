<template>
  <div class="admin">
    
  <ul id="slide-out" class="sidenav sidenav-fixed">
    <li><div class="user-view">
      <div class="background">
        <img src="/images/download.png" class="responsive-img">
      </div>
      <a href="#user"><img class="circle" src="images/yuna.jpg"></a>
      <a href="#name"><span class="white-text name">John Doe</span></a>
      <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><a href="#" class="waves-effect">All Student</a></li>
    <li><a href="#" class="waves-effect">All Staff</a></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  <section class="main">
      <div class="container">
         <h4>All Student</h4>
          <table class="bordered">
        <thead>
          <tr>
              <th>First name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Email</th>
              <th>View</th>

          </tr>
        </thead>

        <tbody v-for="student in students" :key="student.id" :student="student">
          <tr>
            <td>{{student.first_name}}</td>
            <td>{{student.last_name}}</td>
            <td>male</td>
            <td>{{student.phone}}</td>
            <td>{{student.email}}</td>
            <td><router-link :to="`/profile/${student.id}`" class="btn blue darken-3" >View</router-link></td>
          </tr>
        </tbody>
      </table>


       
      </div>
      
  </section>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState , mapActions , mapMutations} from 'vuex'
export default {
  name: 'admin',
  props:["student"],
  computed: {
    ...mapState([
      'students'
    ]),
    
  },
  methods: {

  },
  components: {
    
  },
  //  created() {
  //   this.$route.params.id; // prints value of :id
  // },
}
</script>
<style>
  header, .main, footer {
      padding-left: 300px;
    }

    @media only screen and (max-width : 992px) {
      header, .main, footer {
        padding-left: 0;
      }
    }
    .container {
        width:90%;
    }
</style>
