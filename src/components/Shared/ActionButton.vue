<template>
  <button
    class="rounded-full border-0 bg-kamil-orange-dark px-3 py-2 text-sm font-medium text-kamil-blue-dark transition-shadow duration-300 hover:shadow-blue"
  >
    {{ text }}
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  isLogged: Boolean,
  default: false,
  required: true,
});

const text = computed(() => {
  console.log(props.isLogged);

  return !props.isLogged ? "Sign in" : "Log out";
});
</script>
