<template>
  <layout>
    <template v-slot:title>Your postcode</template>
    <template v-slot:children>
      <form>postcode form here</form>
      <router-link to="/your-cover">Continue</router-link>

    </template>
  </layout>
</template>

<script>
import Layout from '@/layout/layout.vue'

export default {
  name: 'your-postcode',
  components: {
    Layout
  }
}
</script>