<template>
  <layout>
    <template v-slot:title>Hi {{$store.state.person.firstName}}, please enter your email</template>
    <template v-slot:children>
      <form>
        <label for="email">Your email</label>
          <input name="email" type="email" v-model="email"/>
      </form>
      <router-link to="/your-postcode"><button v-on:click="handleOnClick">Continue</button></router-link>
    </template>
  </layout>
</template>

<script>
import Layout from '@/layout/layout.vue'
import { mapMutations } from 'vuex'
import { validateString } from '../helper/validation'

export default {
  name: 'your-email',
  components: {
    Layout
  },
  data() {
    return {
      email: ''
    }
  },
  methods: {
    ...mapMutations([
      'updateEmail'
    ]),
    handleOnClick(e){
      if(validateString(this.email)){
        console.log(' has email')
        this.updateEmail(this.email)
      } else {
        e.preventDefault()
        alert('please enter an email')
      }
    }

  }
}
</script>
