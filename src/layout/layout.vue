<template>
  <main>
    <div id="nav">
      <!-- This should take in current page and return to prevous -->
      <router-link to="/">back</router-link>
    </div>
    <header>Get a quote</header>
    <h1>
      <slot name="title"></slot>
    </h1>
    <slot name="children"></slot>
  </main>
</template>

<script>
export default {
  name: 'layout'
}
</script>