<template>
  <div class="navbar-buffer"></div>
  <Navbar />
  <div id="mainContent" class="loading">
    <router-view/>
  </div>
  <Footer />
</template>

<script setup>
import '@/scss/_global.scss'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

const endLoading = () => {
  document.getElementById('mainContent').classList.remove('loading')
}
setTimeout(endLoading, 500)
</script>

<style lang="scss" scoped>
#mainContent {
  &.loading {
    min-height: 100vh;
  }
}
</style>
