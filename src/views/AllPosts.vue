<template>
  <section class="section-padding">
    <div class="container medium-content">
      <div class="row">
        <div class="d-flex">
          <Sidebar />
          <div>
            <h1>The Mental Health Naps Archive</h1>
            <h2 class="tp">Introduction to Mental Health Naps</h2>
            <ul class="list-unstyled">
              <li><router-link to="/my-story">My Sleep Apnea Story</router-link></li>
              <li><router-link to="/understanding-slpeep-apnea">Understanding Sleep Apnea</router-link></li>
              <li><router-link to="/sleep-scape">My Sleep Scape & Sleep Hygiene</router-link></li>
              <li><router-link to="/sleep-study">All About Sleep Studies</router-link></li>
              <li><router-link to="/vision">The Mental Health Naps Vision</router-link></li>
              <li><router-link to="/about">About Mental Health Naps</router-link></li>
              <li><router-link to="/socials">Follow Mental Health Naps on Social Media</router-link></li>
            </ul>
            <h2 class="tp">Product Articles</h2>
            <ul class="list-unstyled">
              <li><router-link to="/products/cpap-filters">CPAP Filters</router-link></li>
              <li><router-link to="/products/cpap-rainout">CPAP Rainout</router-link></li>
              <li><router-link to="/products/cpap-wipes">CPAP Wipes</router-link></li>
              <li><router-link to="/products/resmed">ResMed Airfit F30i</router-link></li>
            </ul>
            <h2 class="tp">Weekly Blog Posts</h2>
            <ul v-if="isLoaded" class="list-unstyled">
              <li v-for="post in postsList" :key="post.id"><button @click="goToPost(post.slug)" class="text-start"><span class="blue">{{post.title}}</span></button></li>
            </ul>
            <div v-else>
              <p>loading...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
import getPostsList from '@/functions/getPostsList'
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
const postsList = ref()
const isLoaded = ref(false)

onMounted(async () => {
  postsList.value = await getPostsList()
  isLoaded.value = true
})

const goToPost = (slug) => {
  router.push({
    name: 'Post',
    path: '/post/' + slug,
    params: {
      slug: slug,
    }
  })
}
</script>
