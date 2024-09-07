<template>
  <nav class="fixed left-0 top-0 z-10 flex h-16 w-full bg-gradient-to-b from-black to-transparent">
    <ul class="md:text xl mx-auto flex h-full items-center font-serif text-lg font-bold text-white">
      <li class="button-effect ml-9 first:ml-0" v-for="menuItem in menuItems" :key="menuItem.text">
        <router-link :to="menuItem.url">
          {{ menuItem.text }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const menuItems = ref([
  { text: "Home", url: "/", route: "any", type: "route" },
  { text: "News", url: "/news", route: "any", type: "route" },
  { text: "Book Appointment", url: "/book", route: "any", type: "route" },
  { text: "Shop", url: "/shop", route: "any", type: "route" },
  // itd.
]);
</script>

<style>
.button-effect {
  background-image: linear-gradient(to right, rgb(253 186 116) 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  color: black;
  transition:
    background-position 0.2s ease-out,
    color 0.5s ease;
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.button-effect:hover {
  background-position: left bottom;
  color: transparent;
}
</style>
