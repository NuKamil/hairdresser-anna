<template>
  <button
    class="rounded border-0 bg-kamil-orange-dark px-3 py-2 text-sm font-medium text-kamil-blue-dark transition-shadow duration-300 hover:shadow-blue"
    @click="login"
  >
    Sign in
  </button>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, defineProps, computed } from "vue";

const router = useRouter();

const login = () => {
  router.push({
    name: "Login",
  });
};
</script>
