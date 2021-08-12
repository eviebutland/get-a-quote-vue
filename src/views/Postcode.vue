<template>
  <layout>
    <template v-slot:title>Thanks {{$store.state.person.firstName}}, now your postcode</template>
    <template v-slot:children>
      <form>
        <label for="postcode">Your postcode</label>
        <input 
          type="text"
          name="postcode"
          id="postcode"
          v-model="postcode"
        >
      </form>
      <router-link to="/your-cover"><button v-on:click="handleOnClick">Continue</button></router-link>
    </template>
  </layout>
</template>

<script>
import Layout from '@/layout/layout.vue'
import { validateString } from '../helper/validation'
import { mapMutations } from 'vuex'

export default {
  name: 'your-postcode',
  components: {
    Layout
  },
  data(){
    return {
      postcode: ''
    }
  },
  methods: {
    ...mapMutations([
      'updatePostcode'
    ]),
    handleOnClick(e){
      if(validateString(this.postcode)){
        this.updatePostcode(this.postcode)
      } else {
        e.preventDefault()
        alert('Please enter a valid postcode')
      }
    }
  }
}
</script>