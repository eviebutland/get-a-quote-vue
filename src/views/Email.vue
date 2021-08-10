<template>
  <layout>
    <template v-slot:title>Your email</template>
    <template v-slot:children>
      <form>
        form details here
      </form>
      <router-link to="/your-postcode">Continue</router-link>
    </template>
  </layout>
</template>

<script>
import Layout from '@/layout/layout.vue'

export default {
  name: 'your-email',
  components: {
    Layout
  }
}
</script>
