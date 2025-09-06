<template>
  <div>
    <router-view />
    <div :class="[isActiveLink(login) ? 'hidden' : 'flex']">
      <main-nav :items="publicMenu"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import MainNav from "@/components/Navigation/MainNav.vue";
const login = ref("/login");

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};

const publicMenu = ref([
  { text: "HOME", url: "/" },
  { text: "SHOP", url: "/shop" },
  { text: "NEWS", url: "/news" },
  { text: "BOOK NOW", url: "/book" },
]);
</script>
