<template>
  <section class="section-padding fade-in-up">
    <div class="container medium-content">
      <div class="row">
        <div class="d-flex">
          <Sidebar />
          <div id="posts">

            <form @submit.prevent="search">
              <h1><label for="search">Search</label></h1>
              <div class="d-flex flex-column flex-sm-row">
                <input class="me-0 mb-3 me-sm-3 mb-sm-0" type="text" id="search" name="search" v-model="searchText"/>
                <button type="submit" class="btn">Search</button>
              </div>
            </form>

            <br>
            <br>
            <div v-if="showLoading" class="text-center">
              <div class="loader mx-auto mb-3"></div>
              <p>Loading, please wait for just a moment :)</p>
            </div>
            <div v-else-if="isLoaded && posts.length > 0" class="post-container" v-for="post in posts" :key="post.id">
              <button class="text-start" @click="goToPost(post.slug)"><span class="t5 fw-light mb-3">{{post.title}}</span></button>
              <p class="tagline">{{post.readtime}}</p>
              <button @click="goToPost(post.slug)"><img class="post-image" :src="post.featuredImage" alt=""></button>
              <p class="tagline">{{post.publishedAt}}</p>
              <p>{{post.seoDescription}}.. <button @click="goToPost(post.slug)"><span class="blue">more</span></button></p>
            </div>
            <div v-else>
              <h2>Sorry</h2>
              <p>There aren't any results for your search.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
import searchPosts from '@/functions/searchPosts'
import {store} from '@/functions/store'
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

onMounted(() => {
  if (store.searchTerm) {
    searchText.value = store.searchTerm
    search()
  }
})
const router = useRouter()
const posts = ref()
const searchText = ref()
const isLoaded = ref(false)
const showLoading = ref(false)

const search = async () => {
  toggleLoading()
  if (searchText.value) {
    isLoaded.value = false
    posts.value = await searchPosts(searchText.value)
    isLoaded.value = true
    store.searchTerm = ''
  }
  setTimeout(toggleLoading, 1000)
}

const toggleLoading = () => {
  showLoading.value = !showLoading.value;
}

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