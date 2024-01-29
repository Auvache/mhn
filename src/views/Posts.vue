<template>
  <section class="section-padding">
    <div class="container medium-content">
      <div class="row">
        <div class="d-flex">
          <Sidebar />
          <div>
            <h1>Weekly Blog Posts</h1>
            <p>Once a week, I publish a blog post musing about living with sleep apnea and mental health struggles. Use the list below to find which ones you might be interested in.</p>
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
