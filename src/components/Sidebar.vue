<template>
  <section id="sidebar">
    <div>
      <ul class="list-unstyled">
        <li><router-link to="/">evergreen one</router-link></li>
        <li><router-link to="/">evergreen two</router-link></li>
        <li><router-link to="/">evergreen three</router-link></li>
        <li><router-link to="/">evergreen four</router-link></li>
      </ul>
    </div>
  </section>
</template>
<script setup>
</script>
<style lang="scss" scoped>
#sidebar {

  &> div {
    display: none;
    padding: 0.25rem 2rem 0 0;
    margin: 0 2rem 0 0;
    border-right: 1px solid black;
    height: 600px;
    max-height: 90%;

    @include breakpoint(md) {
      display: block;
    }
  }
}
</style>