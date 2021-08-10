<template>
  <layout>
    <template v-slot:title>Your results</template>
    <template v-slot:children>
      Congratulations {name}! Your recommended level of cover is {levelOfCover}
      <router-link to="/">Buy</router-link>
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