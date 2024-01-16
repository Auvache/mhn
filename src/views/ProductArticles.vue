<template>
  <section class="section-padding">
    <div class="container medium-content">
      <div class="row">
        <div class="d-flex">
          <Sidebar />
          <div>
            <h1>All Product Articles</h1>
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
