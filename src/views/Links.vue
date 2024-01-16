<template>
  <section class="mt-3 mt-md-5">
    <div class="container medium-content">
      <div class="row">
        <div class="col-12">
          <ul class="list-unstyled text-center m-auto">
            <li><router-link to="/"><img src="@/assets/img/logos/logo-green.svg" alt="go to TikTok"> Go to the Blog</router-link></li>
            <li><a href="https://www.tiktok.com/@mental_health_naps_?lang=en&is_copy_url=1&is_from_webapp=v1" target="_blank"><img src="@/assets/img/tiktok.png" alt="go to TikTok"> Go to TikTok</a></li>
            <li><a href="https://www.instagram.com/mental_health_naps_/" target="_blank"><img src="@/assets/img/instagram.png" alt="go to instagram"> Go to Instagram</a></li>
            <li><a href="https://www.youtube.com/channel/UCgjWiBrQvqILIc_E4GzLECQ" target="_blank"><img src="@/assets/img/youtube.png" alt="go to youtube"> Go to YouTube</a></li>
            <li><a href="https://www.facebook.com/KajMHnaps" target="_blank"><img src="@/assets/img/facebook.png" alt="go to facebook"> Go to Facebook</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>

</script>

<style lang="scss" scoped>
ul {

  li {
    margin: 1rem 0;
    padding: 1rem;
    transition: all 250ms;

    a {
      font-size: 1.5rem;
      color: $mhn-text;
    }
    &:hover {
      background-color: $mhn-green;

      a {
        color: $white;
      }
    }
  }
  img {
    width: 30px;
  }
}
</style>
