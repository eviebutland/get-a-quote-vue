<template>
    <layout>
      <template v-slot:title>Your details</template>
      <template v-slot:children>
        <form>Form here</form>
        <router-link to="/your-email">Continue</router-link>
      </template>
    </layout>
</template>

<script>
import Layout from '@/layout/layout.vue'

export default {
  name: 'your-details',
  components: {
    Layout
  }
}
</script>