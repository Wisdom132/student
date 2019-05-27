<template>
  <div class="about">
    <div class="container">
      <div v-if="!isDeleted">
      <div class="row" v-if="!edit">
        <table class="striped" style="margin-top:80px;">
        <tbody>
          <tr>
            <th>First name</th>
            <td class="right">{{student.first_name}}</td>
          </tr>
          <tr>
            <th>last Name</th>
            <td class="right">{{student.last_name}}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td class="right">{{student.email}}</td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td class="right">{{student.phone}}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td class="right">{{student.address}}</td>
          </tr>
          <tr>
            <th>Date of Birth</th>
            <td class="right">{{student.date_of_birth}}</td>
          </tr>
          <tr>
            <th>Parent Name</th>
            <td class="right">{{student.parent_name}}</td>
          </tr>
          <tr>
            <th>Parent Phone</th>
            <td class="right">{{student.parent_phone}}</td>
            
          </tr>
          <tr>
            <th>Gender</th>
            <td class="right">Male</td>
          </tr>
        </tbody>
      </table>
      <button @click="removeStudent(student)" class="btn red darken-3" style="margin:30px;">Delete</button>
      <button @click="editStudent(student)" class="btn blue darken-3" style="margin:30px;">Edit</button>
      </div>
      <div v-else>
        <form action="">
         <div class="container">
        <div class="row">
        <div class="input-field col s12 l6 m6">
          <input id="first_name" v-model="student.first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s12 l6 m6">
          <input id="last_name"  v-model="student.last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12 l6 m6">
          <input id="email"  v-model="student.email" type="email" class="validate">
          <label for="Email">Email</label>
        </div>
        <div class="input-field col s12 l6 m6">
          <input id="Phone"  v-model="student.phone" type="number" class="validate">
          <label for="phone">Phone Number</label>
        </div>
      </div>
    <div class="row">
        <div class="input-field col s12 l12 m12">
          <textarea id="textarea1"  v-model="student.address" class="materialize-textarea"></textarea>
          <label for="textarea1">Address</label>
        </div>
      </div>
     <div class="row">
        <div class="input-field col s12 l6 m6">
          <input  type="date"  v-model="student.date_of_birth">
          <label for="date">Date Of Birth</label>
        </div>
        <div class="input-field col s12 l6 m6">
          <input id="last_name" type="text"  v-model="student.parent_name" class="validate">
          <label for="last_name">Parent name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12 l6 m6">
          <input id="first_name"  v-model="student.parent_phone" type="text" class="validate">
          <label for="first_name">Parent Phone</label>
        </div>
        <div class="input-field col s12 m6 l6">
          <select>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
       <label>Gender</label>
  </div>

      </div>
          <button @click.prevent="updateStudent()" class="btn blue darken-3" style="margin:30px;">Save</button>
      </div>
        </form>
      </div>
      </div>
      <div v-else>
        <router-link class="btn" to="/">Go back</router-link>
      </div>
    </div> 
    
  </div>
</template>

<script>
import {mapState , mapActions , mapMutations} from 'vuex'
export default {
  name: 'userprofile',
  // props:['student'],
  data () {
    return {
      isDeleted: false,
      edit:false
    }
  },
  computed: {
    ...mapState([
      'students',
    ]),
    ...mapActions([
      'deleteStudent'
    ]),
    student() {
      return this.students.find(stud => stud.id === Number(this.$route.params.id))
    }

  },
  methods: {
     removeStudent(Student) {
        swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this note!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    this.$store.dispatch('deleteStudent',Student)
    this.isDeleted = true
    swal('This Student Has been Deleted', {
      icon: "success",
    });
  } else {
    swal("This Action Has been canceled");
  }
});        
      },
      editStudent() {
        this.edit = true
      },
      updateStudent() {
        this.edit = false;
        this.$store.dispatch('updateStudent',this.student)
        
      }
  },
  components: {
    
  }
}
</script>
<style scoped>
.container {
  width:70%;
}
</style>

