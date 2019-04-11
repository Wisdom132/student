<template>
 <div class="overall">
   <div class="container white z-depth-3">
     
  <div class="row">
    <form class="col s12">
      <div class="container">
        <div class="row">
        <div class="input-field col s12 l6 m6">
          <input id="first_name" v-model="newStudent.first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s12 l6 m6">
          <input id="last_name"  v-model="newStudent.last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12 l6 m6">
          <input id="email"  v-model="newStudent.email" type="email" class="validate">
          <label for="Email">Email</label>
        </div>
        <div class="input-field col s12 l6 m6">
          <input id="Phone"  v-model="newStudent.phone" type="number" class="validate">
          <label for="phone">Phone Number</label>
        </div>
      </div>
    <div class="row">
        <div class="input-field col s12 l12 m12">
          <textarea id="textarea1"  v-model="newStudent.address" class="materialize-textarea"></textarea>
          <label for="textarea1">Address</label>
        </div>
      </div>
     <div class="row">
        <div class="input-field col s12 l6 m6">
          <input  type="date"  v-model="newStudent.date_of_birth">
          <label for="date">Date Of Birth</label>
        </div>
        <div class="input-field col s12 l6 m6">
          <input id="last_name" type="text"  v-model="newStudent.parent_name" class="validate">
          <label for="last_name">Parent name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12 l6 m6">
          <input id="first_name"  v-model="newStudent.parent_phone" type="text" class="validate">
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
      <button class="btn blue darken-4" @click.prevent="saveStudent" style="margin-bottom:50px;">Register</button>

      </div>
      
    </form>
  </div>
        

   </div>
 </div>
</template>

<script>
import{mapActions,mapMutations,mapGetters} from 'vuex'
export default {
  name: 'register',
  data() {
    return {
       newStudent: [
      {
        id:1,
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        address:'',
        date_of_birth:'',
        parent_name:'',
        parent_phone:'',
        gender:[],
      }
    ]
    }
  },
  computed: {
     ...mapGetters(['students','lastid']),
  },
  methods: {
    saveStudent() {
      this.$store.dispatch('addStudent', {
        id:this.lastid+1,
        first_name:this.newStudent.first_name,
        last_name:this.newStudent.last_name,
        phone:this.newStudent.phone,
        email:this.newStudent.email,
        address:this.newStudent.address,
        date_of_birth:this.newStudent.date_of_birth,
        parent_name:this.newStudent.parent_name,
        parent_phone:this.newStudent.parent_phone,
      }),
      this.newStudent=[]
       
    },
  },
 
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .overall {
    /* margin:50px 0px; */
    padding:60px 0px;
  }
  .container {
    width: 70%;
  }
</style>
