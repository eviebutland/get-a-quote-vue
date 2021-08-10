<template>
  <div class="home">
    <layout>
      <template v-slot:title>Home</template>
      <template v-slot:children>
        <router-link to="/your-details">Start quote</router-link>
      </template>
    </layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from '@/layout/layout.vue'

export default {
  name: 'Home',
  components: {
    Layout
  }
}
</script>
