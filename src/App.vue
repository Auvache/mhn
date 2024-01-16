<template>
  <div class="navbar-buffer"></div>
  <Navbar />
  <router-view/>
  <Footer />
</template>

<script setup>
import '@/scss/_global.scss'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style lang="scss">

</style>
