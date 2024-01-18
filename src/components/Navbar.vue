<template>
  <nav class="navbar navbar-expand-lg py-0 position-fixed">
    <div class="container-fluid large-content">
      <router-link class="navbar-brand d-flex align-items-center logo-font white" to="/"><img class="navbar-logo" src="@/assets/img/logos/logo-green.svg" alt=""><span class="d-md-none">MHN</span><span class="d-none d-md-inline">Mental Health Naps</span></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div v-if="route.path !== '/links'" class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-if="route.path !== '/'" class="nav-item">
            <router-link class="nav-link" to="/" role="button">
              Home
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Articles
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/understanding-sleep-apnea">Understanding Sleep Apnea</router-link></li>
              <li><router-link class="dropdown-item" to="/sleep-study">Sleep Study</router-link></li>
              <li><router-link class="dropdown-item" to="/sleep-scape">Sleep Scape</router-link></li>
              <li><router-link class="dropdown-item" to="/all-posts">All Articles and Blog Posts</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/products/cpap-filters">CPAP Filters</router-link></li>
              <li><router-link class="dropdown-item" to="/products/cpap-rainout">CPAP Rainout</router-link></li>
              <li><router-link class="dropdown-item" to="/products/cpap-wipes">CPAP Wipes</router-link></li>
              <li><router-link class="dropdown-item" to="/products/resmed">ResMed Airfit F30i</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" to="/all-posts">All Product Posts</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Socials
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="https://www.tiktok.com/@mental_health_naps_?lang=en&is_copy_url=1&is_from_webapp=v1" target="_blank">TikTok</a></li>
              <li><a class="dropdown-item" href="https://www.instagram.com/mental_health_naps_/" target="_blank">Instagram</a></li>
              <li><a class="dropdown-item" href="https://www.youtube.com/channel/UCgjWiBrQvqILIc_E4GzLECQ" target="_blank">YouTube</a></li>
              <li><a class="dropdown-item" href="https://www.facebook.com/KajMHnaps" target="_blank">Facebook</a></li>
              <li><router-link class="dropdown-item" to="/socials">All Socials</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/my-story">My Story</router-link></li>
              <li><router-link class="dropdown-item" to="/about">About Me and Mental Health Naps</router-link></li>
              <li><router-link class="dropdown-item" to="/vision">The Mental Health Naps Vision</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import {useRoute} from "vue-router";

const route = useRoute()
</script>
<style lang="scss" scoped>
nav {
  z-index: 1000;
  background-color: $mhn-green;
  width: 100%;
  top: 0;

  .navbar-brand:hover,
  .navbar-brand:focus
  {
    color: $white;
  }

  .nav-link {
    color: $white;
    font-weight: $font-weight-thin;

    &:active,
    &:focus,
    &:visited,
    &.show
    {
      color: $white;
    }
  }

  .dropdown-menu {
    right: 0;
    left: inherit;
  }
}
.navbar-logo {
  width: 60px;
}
</style>