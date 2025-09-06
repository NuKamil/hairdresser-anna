<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { useRoute }   from "vue-router";

import DefaultLayout  from "@/layouts/DefaultLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";

const route = useRoute();
const layout = computed(() =>
  route.path.startsWith("/dashboard")
    ? DashboardLayout
    : DefaultLayout
);
</script>
