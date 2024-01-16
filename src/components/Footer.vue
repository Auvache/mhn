<template>
  <footer v-if="route.path !== '/links'" id="footer">
    <div class="container">
      <div class="row">
        <div class="logo-container"><span class="d-flex align-items-center justify-content-center logo-font white"><img class="navbar-logo" src="@/assets/img/logos/logo-green.svg" alt=""><span class="d-none d-sm-block">Mental Health Naps</span></span></div>
      </div>
      <div class="row">
        <ul class="socials">
          <li><a href="https://www.instagram.com/mental_health_naps_/"><img src="@/assets/img/instagram.png" alt="go to instagram"></a></li>
          <li><a href="https://www.youtube.com/channel/UCgjWiBrQvqILIc_E4GzLECQ"><img src="@/assets/img/youtube.png" alt="go to youtube"></a></li>
          <li><a href="https://www.tiktok.com/@mental_health_naps_?lang=en&is_copy_url=1&is_from_webapp=v1"><img src="@/assets/img/tiktok.png" alt="go to TikTok"></a></li>
          <li><a href="https://www.facebook.com/KajMHnaps"><img src="@/assets/img/facebook.png" alt="go to facebook"></a></li>
        </ul>
      </div>

    </div>
  </footer>
</template>

<script setup>
import {useRoute} from "vue-router";

const route = useRoute()
</script>

<style lang="scss" scoped>
#footer {
  padding: 2rem 0 3rem;
  background-color: $mhn-green;

  .logo-container {
    display: inline-block;

    img {
      width: 60px;
    }
  }

  a {
    &:hover {
      color: $white;
    }
  }
}
.socials {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;

  img {
    width: 2rem;
    margin: 0 0.5rem;
    transition: all 150ms;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
<script setup>
</script>