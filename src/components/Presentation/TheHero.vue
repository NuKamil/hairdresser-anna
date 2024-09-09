<template>
  <header
    id="main"
    class="mb-12 flex h-screen min-h-screen shrink-0 snap-start items-center justify-center"
  >
    <!-- <video autoplay loop muted class="absolute -z-10 min-h-full w-auto min-w-full max-w-none">
      <source :src="urlVideo" />
      Your browser does not support the video tag.
    </video> -->
    <img :src="urlHeaderPicture" alt="" class="absolute -z-10 h-full w-full object-cover" />
    <the-visiting-card />
  </header>
</template>

<script setup>
import TheVisitingCard from "@/components/Presentation/TheVisitingCard.vue";
const urlVideo = "/Video/pexels-arthouse-studio-7686503 (Original).mp4";
const urlHeaderPicture = "/Pictures/woman-5989552_1920.jpg";
</script>

<style>
video {
  filter: brightness(50%);
}
</style>
