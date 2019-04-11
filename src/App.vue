<template>
  <div id="app">
    <appnav />
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src
import appnav from '@/components/appnav.vue'

export default {
  name: 'home',
  components: {
    appnav
  }
}
</script>

<style>

</style>
