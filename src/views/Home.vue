<template>
  <section class="pt-5">
    <div class="container large-content">
      <div class="row">
        <div class="card-box d-flex flex-column flex-md-row align-items-center justify-content-center">
          <router-link to="/" class="card square">
            <div class="card-body">
              one
            </div>
          </router-link>
          <router-link to="/" class="card square">
            <div class="card-body">
              two
            </div>
          </router-link>
          <router-link to="/" class="card square">
            <div class="card-body">
              three
            </div>
          </router-link>
          <router-link to="/" class="card square">
            <div class="card-body">
              four
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <section>
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