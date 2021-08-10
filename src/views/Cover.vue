<template>
  <layout>
    <template v-slot:title>Who do you want to cover?</template>
    <template v-slot:children>
      <form>checkbox of cover</form>
      <router-link to="/your-benefits">Continue</router-link>
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