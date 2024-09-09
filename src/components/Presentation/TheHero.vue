<template>
  <header
    id="main"
    class="relative mb-12 flex h-screen items-center justify-center overflow-hidden"
  >
    <!-- <video autoplay loop muted class="absolute -z-10 min-h-full w-auto min-w-full max-w-none">
      <source :src="urlVideo" />
      Your browser does not support the video tag.
    </video> -->
    <img
      :src="urlHeaderPicture"
      alt=""
      class="midn-h-full absolute -z-10 w-auto min-w-full max-w-none"
    />

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
