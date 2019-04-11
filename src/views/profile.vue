<template>
  <div class="profile">
    <userprofile />
  </div>
</template>

<script>
// @ is an alias to /src
import userprofile from '@/components/userprofile.vue'

export default {
  name: 'home',
  components: {
    userprofile
  }
}
</script>
