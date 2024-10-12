<template>
  <router-view />
  <div :class="[isActiveLink(login) ? 'hidden' : 'flex']">
    <main-nav />
  </div>
</template>

<script setup>
import MainNav from "@/components/Navigation/MainNav.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
const login = ref("/login");

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>
