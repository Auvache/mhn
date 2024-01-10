<template>
  <div class="navbar-buffer"></div>
  <Navbar />
  <router-view/>
</template>

<script setup>
import '@/scss/_global.scss'
import Navbar from '@/components/Navbar.vue'
</script>

<style lang="scss">

</style>
