<template>
  <div class="h-auto">
    <router-view/>
    <dashboard-nav :items="dashboardMenu" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DashboardNav from "@/components/Navigation/DashboardNav.vue";

const dashboardMenu = ref([
  { text: "Services", url: "/dashboard/services" },
  { text: "Settings",     url: "/dashboard/settings"     },
]);
</script>
