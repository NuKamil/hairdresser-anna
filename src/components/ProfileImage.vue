<template>
  <div class="flex">
    <div></div>
    <button
      class="border-1 rounded-full border-solid border-kamil-orange-dark bg-kamil-orange-dark p-1 transition-shadow duration-300 hover:shadow-blue"
    >
      <img :src="image" alt="" class="h-12 w-12 rounded-full object-contain object-center" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const image = ref("/Pictures/20240907_102924.jpg");
</script>
