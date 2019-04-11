<template>
  <div class="home">
    <nav class="blue darken-4">
        <div class="container">
            <div class="nav-wrapper">
     <router-link to="/"><a class="brand-logo">Logo</a></router-link> 
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li> <router-link to="admin">Admin</router-link>></li>
        <li><router-link class="waves-effect waves-light btn blue darken-4 z-depth-4" to="/">Add Student</router-link></li>
      </ul>
    </div>
        </div>
    
  </nav>

  <ul class="sidenav" id="mobile-demo">
     <li> <router-link to="admin">Admin</router-link></li>
        <li><router-link class="waves-effect waves-light btn blue darken-4 z-depth-4" to="/">Add Student</router-link></li>
  </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import register from '@/components/register.vue'

export default {
  name: 'home',
  components: {
    
  }
}
</script>
