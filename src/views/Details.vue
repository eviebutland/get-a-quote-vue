<template>
    <layout>
      <template v-slot:title>Your details</template>
      <template v-slot:children>
        <form>
          <label for="title">Your title</label>
          <select 
            name="title" 
            id="title" 
            v-model="title"
          >
            <option value="Miss">Miss</option>
            <option value="Ms">Ms</option>
            <option value="Mr">Mr</option>
            <option value="Dr">Dr</option>
            <option value="Proff">Proff</option>
          </select>
          <label for="firstName">Your first name</label>
          <input 
            name="firstName" 
            type="text" 
            v-model="firstName"
            required
          />
          <label for="lastName">Your last name</label>
          <input 
            name="lastName" 
            type="text" 
            v-model="lastName"
            required
          />
        </form>
        <router-link 
          to="/your-email" >
            <button v-on:click="handleOnClick">Continue</button>
        </router-link>
      </template>
    </layout>
</template>

<script>
import Layout from '@/layout/layout.vue'
import { mapMutations } from 'vuex'
import { validateString } from '../helper/validation'

export default {
  name: 'your-details',
  components: {
    Layout
  },
  data (){
    return {
      title: '',
      firstName: '',
      lastName: '',
      currentPage: 'Details'
    }
  },
  methods: {
    ...mapMutations([
      'updatePerson'
    ]),
    handleOnClick(e) {
      // validate fields 
      if(validateString(this.firstName) && validateString(this.lastName)){
        console.log('field is valid')
        this.updatePerson({
          title: this.title,
          firstName: this.firstName,
          lastName: this.lastName
        })
      } else {
        e.preventDefault()
        alert('please enter a value in the required fields')
      }
    }
  }
}
</script>