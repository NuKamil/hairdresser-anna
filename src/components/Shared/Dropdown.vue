<template>
  <div class="bg-white text-kamil-blue-dark">
    <ul class="absolute right-0 h-max w-max origin-top-right rounded-md p-3 py-2 shadow-lg">
      <li class="select-effect py-1" v-for="menuItem in menuItems" :key="menuItem.text">
        <a href="#" class="">{{ menuItem.text }}</a>
      </li>
      <div class="mt-2 flex w-full items-center justify-center">
        <slot name="extra-button"></slot>
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menuItems = ref([
  { text: "Dashboard", url: "/dashboard" },
  { text: "Settings", url: "/settings" },
  { text: "Purchase history", url: "/purchase" },
]);
</script>
