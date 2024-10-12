<template>
  <button
    class="w-full rounded-lg border-0 bg-kamil-orange-dark px-3 py-2 text-sm font-medium text-kamil-blue-dark transition-shadow duration-300 hover:shadow-blue"
  >
    {{ useStore.isLoggeIn ? "Log out" : "Sign in" }}
  </button>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";

const useStore = useUserStore();
</script>
