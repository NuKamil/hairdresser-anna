<template>
  <the-hero />
  <div class="fixed right-10 top-1/2 z-10 flex">
    <vertical-nav />
  </div>

  <the-about-me />
</template>

<script setup>
import TheHero from "@/components/Presentation/TheHero.vue";
import VerticalNav from "@/components/Navigation/VerticalNav.vue";
import TheAboutMe from "@/components/Presentation/TheAboutMe.vue";
</script>
