<template>
  <section class="section-padding">
    <div class="container medium-content">
      <div class="row">
        <div class="d-flex">
          <Sidebar />
          <div>
            <h1>All Posts</h1>
            <h2 class="tp">Product Articles</h2>
            <ul>
              <li><router-link to="/">link 1</router-link></li>
              <li><router-link to="/">link 1</router-link></li>
            </ul>
            <h2 class="tp">Story Articles</h2>
            <ul>
              <li><router-link to="/">link 1</router-link></li>
              <li><router-link to="/">link 1</router-link></li>
            </ul>
            <h2 class="tp">Blog Posts</h2>
            <ul>
              <li><router-link to="/">link 1</router-link></li>
              <li><router-link to="/">link 1</router-link></li>
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
