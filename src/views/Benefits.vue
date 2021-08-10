<template>
  <layout>
    <template v-slot:title>What do you want cover for?</template>
    <template v-slot:children>
      <form>checkbox of benefits</form>
      <router-link to="/results">Continue</router-link>
    </template>
  </layout>
</template>

<script>
import Layout from '@/layout/layout.vue'

export default {
  name: 'your-cover',
  components: {
    Layout
  }
}
</script>