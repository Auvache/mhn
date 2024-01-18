<template>
  <section class="section-padding">
    <div class="container medium-content">
      <div class="row">
        <div class="d-flex">
          <Sidebar />
          <div>
            <h1>All Posts</h1>
            <h2 class="tp">Products</h2>
            <ul class="list-unstyled">
              <li><router-link to="/products/cpap-filters">CPAP Filters</router-link></li>
              <li><router-link to="/products/cpap-rainout">CPAP Rainout</router-link></li>
              <li><router-link to="/products/cpap-wipes">CPAP Wipes</router-link></li>
              <li><router-link to="/products/resmed">ResMed Airfit F30i</router-link></li>
            </ul>
            <h2 class="tp">Articles</h2>
            <ul class="list-unstyled">
              <li><router-link to="/understanding-slpeep-apnea">Understanding Sleep Apnea</router-link></li>
              <li><router-link to="/sleep-study">Sleep Study</router-link></li>
              <li><router-link to="/sleep-scape">Sleep Scape and Sleep Hygiene</router-link></li>
              <li><router-link to="/my-story">My Story</router-link></li>
              <li><router-link to="/about">About Me and Mental Health Naps</router-link></li>
              <li><router-link to="/vision">The Mental Health Naps Vision</router-link></li>
              <li><router-link to="/socials">Social Media Accounts</router-link></li>
            </ul>
            <h2 class="tp">Blog Posts</h2>
            <ul v-if="isLoaded" class="list-unstyled">
              <li v-for="post in postsList" :key="post.id"><button @click="goToPost(post.slug)"><span class="blue">{{post.title}}</span></button></li>
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
    name: 'Posts',
    path: '/posts/' + slug,
    params: {
      slug: slug,
    }
  })
}
</script>
