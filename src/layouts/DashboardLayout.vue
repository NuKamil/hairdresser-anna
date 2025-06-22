<template>
  <div>
    <router-view/>
    <dashboard-nav :items="dashboardMenu" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DashboardNav from "@/components/Navigation/DashboardNav.vue";

const dashboardMenu = ref([
  { text: "Hair Services", url: "/dashboard/hair-services" },
  { text: "Settings",     url: "/dashboard/settings"     },
]);
</script>
