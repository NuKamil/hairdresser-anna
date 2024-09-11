<template>
  <button
    class="rounded-full border-0 bg-kamil-orange-dark px-3 py-2 text-sm font-medium text-kamil-blue-dark transition-shadow duration-300 hover:shadow-blue"
  >
    {{ props.isLogged ? "Sign in" : "Log in" }}
  </button>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  isLogged: false,
});
</script>
