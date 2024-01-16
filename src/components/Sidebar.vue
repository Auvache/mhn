<template>
  <section id="sidebar">
    <div class="sidebar-content">
      <img class="sidebar-bio-pic mb-3" src="@/assets/img/cpap-9.jpeg" alt="">
      <p class="tagline mb-3">Hi, I'm Kajsa! Let's talk about mental health with smiles, not tears :)</p>
      <ul class="list-unstyled">
        <li><router-link to="/">Learn about my story</router-link></li>
        <li><router-link to="/">Should you get a sleep study?</router-link></li>
        <li><router-link to="/">How do I sleep at night (and at nap time)?</router-link></li>
        <li><router-link to="/">Understanding sleep apnea</router-link></li>
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
    padding: 0.25rem 2rem 0 0;
    margin: 0 2rem 0 0;
    border-right: 0.5px solid $gray-chateau;
    height: 600px;
    max-height: 90%;
    width: 225px;
    position: sticky;
    top: 126px;

    li a {
      font-size: 16px;
    }

    @include breakpoint(md) {
      display: block;
    }

    .sidebar-bio-pic {
      width: 100%;
      border: 1px solid transparent;
      border-radius: 50%;
    }
  }


}
</style>