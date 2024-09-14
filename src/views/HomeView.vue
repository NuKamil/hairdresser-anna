<template>
  <div class="no-scrollbar relative h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
    <div class="fixed right-10 top-1/2">
      <vertical-nav />
    </div>
    <the-hero />
    <the-about-me />
  </div>
</template>

<script setup>
import TheHero from "@/components/Presentation/TheHero.vue";
import VerticalNav from "@/components/Navigation/VerticalNav.vue";
import TheAboutMe from "@/components/Presentation/TheAboutMe.vue";
</script>
