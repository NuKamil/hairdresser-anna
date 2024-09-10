<template>
  <nav class="fixed left-0 top-0 z-10 flex h-16 w-full">
    <ul
      class="md:text xl text-kamil-orange-dark mx-auto flex h-full items-center font-sans text-lg"
    >
      <li class="ml-9 first:ml-0" v-for="menuItem in menuItems" :key="menuItem.text">
        <router-link
          :class="[isActiveLink(menuItem.url) ? 'text-kamil-orange-1' : 'button-effect']"
          :to="menuItem.url"
        >
          {{ menuItem.text }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const menuItems = ref([
  { text: "HOME", url: "/" },
  { text: "SHOP", url: "/shop" },
  { text: "NEWS", url: "/news" },
  { text: "BOOK APPOINTMENT", url: "/book" },
  // itd.
]);

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<style>
.button-effect {
  background-image: linear-gradient(to right, rgb(232, 184, 109) 50%, rgb(95, 111, 101) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  color: rgb(95, 111, 101);
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
