<template>
  <section class="section-padding">
    <div class="container medium-content">
      <div class="row">
        <div class="d-flex">
          <Sidebar />
          <div id="post" v-if="isLoaded">

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

const post = ref()
const isLoaded = ref(false)
// onMounted(async () => {
//   post.value = await getPost(props.slug)
//   isLoaded.value = true
// })



</script>
