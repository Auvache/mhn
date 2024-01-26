<template>
  <section class="section-padding">
    <div class="container medium-content">
      <div class="row">
        <div class="d-flex">
          <Sidebar />
          <div id="post" v-if="isLoaded">
            <h1 class="h2 fw-light">{{ post.headTitle }}</h1>
            <p class="tagline mb-3">{{post.post.readtime}}</p>
            <img class="mb-3" :src="post.post.featuredImage" alt="">
            <p class="tagline mb-5">{{post.post.publishedAt}}</p>
            <div v-html="post.post.content"></div>
            <router-link to="/">Back to Home</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
import getPost from "@/functions/getPost";
import {onMounted, ref} from "vue";

const props = defineProps({
  'slug': String,
})

const post = ref()
const isLoaded = ref(false)
onMounted(async () => {
  post.value = await getPost(props.slug)
  isLoaded.value = true
})
</script>