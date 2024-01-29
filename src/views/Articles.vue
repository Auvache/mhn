<template>
  <section class="section-padding">
    <div class="container medium-content">
      <div class="row">
        <div class="d-flex">
          <Sidebar />
          <div>
            <h1>Introduction to Mental Health Naps</h1>
            <p>Below are articles that encompass what Mental Health Naps is about. It’s a great place to start to get to know me as a content creator and sleep apnea patient.</p>
            <ul class="list-unstyled">
              <li><router-link to="/my-story">My Sleep Apnea Story</router-link></li>
              <li><router-link to="/understanding-slpeep-apnea">Understanding Sleep Apnea</router-link></li>
              <li><router-link to="/sleep-scape">My Sleep Scape & Sleep Hygiene</router-link></li>
              <li><router-link to="/sleep-study">All About Sleep Studies</router-link></li>
              <li><router-link to="/vision">The Mental Health Naps Vision</router-link></li>
              <li><router-link to="/about">About Mental Health Naps</router-link></li>
              <li><router-link to="/socials">Follow Mental Health Naps on Social Media</router-link></li>
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
