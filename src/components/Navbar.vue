<template>
  <nav class="navbar navbar-expand-lg py-0 position-fixed">
    <div class="container-fluid large-content">
      <router-link class="navbar-brand d-flex align-items-center logo-font white" to="/"><img class="navbar-logo" src="@/assets/img/logos/logo-green.svg" alt=""><span class="d-md-none">MHN</span><span class="d-none d-md-inline">Mental Health Naps</span></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sleep Apnea
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/sleep-study">Sleep Study</router-link></li>
              <li><router-link class="dropdown-item" to="/sleep-scape">Sleep Scape</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" to="/understanding-sleep-apnea">Understanding Sleep Apnea</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Socials
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">TikTok</a></li>
              <li><a class="dropdown-item" href="#">Instagram</a></li>
              <li><a class="dropdown-item" href="#">YouTube</a></li>
              <li><a class="dropdown-item" href="#">Facebook</a></li>
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
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Articles
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/">Affiliate Link 1</router-link></li>
              <li><router-link class="dropdown-item" to="/">Affiliate Link 2</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" to="/all-posts">All Blog Posts</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
</script>
<style lang="scss" scoped>

</style>