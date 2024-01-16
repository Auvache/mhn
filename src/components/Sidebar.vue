<template>
  <section id="sidebar">
    <div class="sidebar-content">
      <img class="sidebar-bio-pic mb-3" src="@/assets/img/about-me.png" alt="">
      <p class="text-center">Managing Mental Health and Sleep Apnea with smiles, not tears.</p>
      <hr>
      <ul class="list-unstyled text-center">
        <li><router-link to="/product-articles">See all posts about specific products</router-link></li>
        <li><router-link to="/all-posts">See all articles</router-link></li>
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
    border-right: 1px solid $gray-chateau;
    height: 600px;
    max-height: 90%;
    width: 225px;
    position: sticky;
    top: 126px;

    p {
      font-size: 16px;
      line-height: 26px;
    }

    ul li {
      margin-bottom: 1rem;
      line-height: 20px;

      a {
        font-size: 16px;
        line-height: 20px;
      }
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