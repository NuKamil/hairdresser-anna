<template>
  <div class="flex flex-col">
    <button
      @click="toggleDropdown"
      class="border-1 relative rounded-full border-solid border-kamil-orange-dark bg-kamil-orange-dark p-1 transition-shadow duration-300 hover:shadow-blue"
    >
      <img :src="image" alt="" class="h-12 w-12 rounded-full object-contain object-center" />
    </button>

    <!-- Dropdown -->
    <div class="bg-white text-kamil-blue-dark">
      <ul v-show="isOpen" class="absolute h-max w-max origin-top-right rounded-md py-1 shadow-lg">
        <li>
          <a href="#">text1</a>
        </li>
        <li>
          <a href="#">text2</a>
        </li>
        <li>
          <a href="#">text3</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const image = ref("/Pictures/20240907_102924.jpg");

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>
