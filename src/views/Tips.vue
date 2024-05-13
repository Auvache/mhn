<template>
  <section class="section-padding">
    <div class="container medium-content">
      <div class="row">
        <div class="d-flex">
          <Sidebar />
          <div id="tips">
            <h1>Tips</h1>
            <ul class="list-unstyled">
              <li><router-link to="/products/cpap-rainout">4 Ways to Help with CPAP Rainout CPAP Hose Condensation</router-link></li>
              <li><router-link to="/post/7 Tips to Help Get Used to Your CPAP Mask">7 Tips to Help Get Used to Your CPAP Mask</router-link></li>
              <li><router-link to="/post/219-tips-things-i-wish-i-knew-when-i-was-diagnosed-with-sleep-apnea">Things I Wish I Knew When Diagnosed with Sleep Apnea</router-link></li>
              <li><router-link to="/post/222-leaks-7-tips-that-help-me-battle-cpap-mask-leaks">7 Tips That Help Me Battle CPAP Mask Leaks</router-link></li>
              <li><router-link to="/post/224-marks-12-tips-to-help-with-cpap-mask-skin-irritation-and-marks">12 Tips to Help CPAP Mask Skin Irritation and Marks</router-link></li>
              <li><router-link to="/post/226-adjust-5-tips-to-help-adjust-to-your-cpap-mask">6 Tips to Help Adjust to Your CPAP Mask</router-link></li>
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