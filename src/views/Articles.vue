<template>
  <section class="section-padding">
    <div class="container medium-content">
      <div class="row">
        <div class="d-flex">
          <Sidebar />
          <div>
            <h1>Articles</h1>
            <ul class="list-unstyled">
              <li><router-link to="/understanding-slpeep-apnea">Understanding Sleep Apnea</router-link></li>
              <li><router-link to="/sleep-study">Sleep Study</router-link></li>
              <li><router-link to="/sleep-scape">Sleep Scape and Sleep Hygiene</router-link></li>
              <li><router-link to="/my-story">My Story</router-link></li>
              <li><router-link to="/about">About Me and Mental Health Naps</router-link></li>
              <li><router-link to="/vision">The Mental Health Naps Vision</router-link></li>
              <li><router-link to="/socials">Social Media Accounts</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
</script>
