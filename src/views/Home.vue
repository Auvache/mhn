<template>
  <section class="pt-3 pt-lg-5 fade-in">
    <div class="container large-content">
      <div class="row">
        <div class="card-box d-flex flex-row align-items-baseline justify-content-center flex-wrap">

          <div class="d-flex justify-content-around">
            <router-link to="/my-story" class="text-center">
              <div class="image-card">
                <img src="@/assets/img/my-story.png" alt="">
                <p>My Story</p>
              </div>
            </router-link>

            <router-link to="/understanding-sleep-apnea" class="text-center">
              <div class="image-card">
                <img src="@/assets/img/sleep-apnea.png" alt="">
                <p>Sleep Apnea</p>
              </div>
            </router-link>
          </div>
          <div class="d-flex justify-content-around">
            <router-link to="/sleep-scape" class="text-center">
              <div class="image-card">
                <img src="@/assets/img/sleep-scape.png" alt="">
                <p>Sleep Scape</p>
              </div>
            </router-link>

            <router-link to="/sleep-study" class="text-center">
              <div class="image-card">
                <img src="@/assets/img/sleep-study.png" alt="">
                <p>Sleep Studies</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="fade-in-up">
    <div class="container medium-content">
      <div class="row">
        <div class="d-flex">
          <Sidebar />
          <div id="posts">
            <div class="post-container" v-for="post in posts" :key="post.id">
              <button class="text-start" @click="goToPost(post.slug)"><span class="t5 fw-light mb-3">{{post.title}}</span></button>
              <p class="tagline">{{post.readtime}}</p>
              <button @click="goToPost(post.slug)"><img class="post-image" :src="post.featuredImage" alt=""></button>
              <p class="tagline">{{post.publishedAt}}</p>
              <p>{{post.seoDescription}}.. <button @click="goToPost(post.slug)"><span class="blue">more</span></button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
import getPosts from '@/functions/getPosts'
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
const posts = ref()
onMounted(async () => {
  posts.value = await getPosts()
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

<style lang="scss" scoped>

</style>