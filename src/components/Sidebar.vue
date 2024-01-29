<template>
  <section id="sidebar">
    <div class="sidebar-content text-center">
      <img class="sidebar-bio-pic mb-3" src="@/assets/img/about-me.png" alt="">
      <p>My name is Kajsa Bradley. I hope that Mental Health Naps helps you on your own Sleep Apnea Journey.</p>
      <hr>
      <p>Quick Product Finds</p>
      <ul class="list-unstyled">
        <li><router-link to="/products/cpap-filters">CPAP Filters</router-link></li>
        <li><router-link to="/products/cpap-rainout">CPAP Rainout</router-link></li>
        <li><router-link to="/products/cpap-wipes">CPAP Wipes</router-link></li>
        <li><router-link to="/products/resmed">ResMed Airfit F30i</router-link></li>
        <li><router-link to="/all-posts">See All Articles</router-link></li>
      </ul>
    </div>
  </section>
</template>
<script setup>
</script>
<style lang="scss" scoped>
#sidebar {

  .sidebar-content {
    display: none;
    padding: 0.25rem 2rem 1rem 0;
    margin: 0 2rem 2rem 0;
    border-right: 1px solid $gray-chateau;
    min-height: 600px;
    width: 225px;
    position: sticky;
    top: 126px;

    ul li {
      margin-bottom: 0.5rem;
    }

    @include breakpoint(md) {
      display: block;
    }

    .sidebar-bio-pic {
      width: 100%;
      border: 1px solid transparent;
      border-radius: 50%;
    }

    hr {
      border-top: 1px solid $gray-chateau;
    }
  }

}
</style>