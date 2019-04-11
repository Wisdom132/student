<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <table class="striped" style="margin-top:80px;">
        <tbody v-for="student in students" :key="student.id" :student="student">
          <tr>
            <th>First name</th>
            <td class="right">{{student.first_name}}</td>
            <!-- <td>$0.87</td> -->
          </tr>
          <tr>
            <th>last Name</th>
            <td class="right">{{student.last_name}}</td>
            <!-- <td>$3.76</td> -->
          </tr>
          <tr>
            <th>Email</th>
            <td class="right">{{student.email}}</td>
            <!-- <td>$7.00</td> -->
          </tr>
          <tr>
            <th>Phone Number</th>
            <td class="right">{{student.phone}}</td>
            <!-- <td>$7.00</td> -->
          </tr>
          <tr>
            <th>Address</th>
            <td class="right">{{student.address}}</td>
            <!-- <td>$7.00</td> -->
          </tr>
          <tr>
            <th>Date of Birth</th>
            <td class="right">{{student.date_of_birth}}</td>
            <!-- <td>$7.00</td> -->
          </tr>
          <tr>
            <th>Parent Name</th>
            <td class="right">{{student.parent_name}}</td>
            <!-- <td>$7.00</td> -->
          </tr>
          <tr>
            <th>Parent Phone</th>
            <td class="right">{{student.parent_phone}}</td>
            <!-- <td>$7.00</td> -->
          </tr>
          <tr>
            <th>Gender</th>
            <td class="right">Male</td>
            <!-- <td>$7.00</td> -->
          </tr>
        </tbody>
      </table>
      <button class="btn blue darken-3">Edit</button>
      <button class="btn red darken-3" style="margin:30px;">Delete</button>
      </div>
    </div>
  





  
    
  </div>
</template>

<script>
import {mapState , mapActions , mapMutations} from 'vuex'
export default {
  props:["student"],
  name: 'about',
  computed: {
    ...mapState([
      'students'
    ])
  },
  components: {
    
  }
}
</script>
<style scoped>
.container {
  width:60%;
}
</style>

