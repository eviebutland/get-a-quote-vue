<template>
  <layout>
    <template v-slot:title>Who do you want to cover?</template>
    <template v-slot:children>
      <form>
        <label for="cover">Cover</label>
        <fieldset>
          <label for="yourself">Yourself</label>
          <input type="checkbox" name="yourself" id="yourself" v-model="yourself">
          <label for="partner">Partner</label>
          <input type="checkbox" name="partner" id="partner" v-model="partner">
          <label for="children">children</label>
          <input type="checkbox" name="children" id="children" v-model="children">
        </fieldset>
        <fieldset v-if="children">
          <label for="1">1</label>
          <input type="checkbox" name="1" id="1">
          <label for="2">2</label>
          <input type="checkbox" name="2" id="2">
          <label for="3">3</label>
          <input type="checkbox" name="3" id="3">
          <label for="4">4</label>
          <input type="checkbox" name="4" id="4">
        </fieldset>
      </form>
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
  },
  data(){
    return {
      yourself: true,
      partner: false,
      children: false,
      numOfChildren: 0
    }
  }
}
</script>