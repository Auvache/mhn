<template>
  <section class="section-padding">
    <div class="container medium-content">
      <div class="row">
        <div class="d-flex">
          <Sidebar />
          <div>
            <h1>Product Articles</h1>
            <p>Below are articles that provide Amazon links plus information to help you find different products that help you with some sleep apnea/CPAP struggles. In addition to find what you’ve seen in my videos on social media.</p>
            <ul class="list-unstyled">
              <li><router-link to="/products/cpap-filters">CPAP Filters</router-link></li>
              <li><router-link to="/products/cpap-rainout">CPAP Rainout</router-link></li>
              <li><router-link to="/products/cpap-wipes">CPAP Wipes</router-link></li>
              <li><router-link to="/products/resmed">ResMed Airfit F30i</router-link></li>
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
