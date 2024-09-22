<template>
  <transition name="fade">
    <div class="z-[-10] text-kamil-blue-dark">
      <ul
        class="absolute right-0 top-0 h-max w-full origin-top-right flex-col rounded-md bg-white p-3 py-2 pt-16 shadow-lg md:top-16 md:w-auto md:pt-0"
      >
        <li
          class="select-effect flex justify-center py-1"
          v-for="item in props.menuItems"
          :key="item.text"
        >
          <a href="#" class="">{{ item.text }}</a>
        </li>
        <div class="mx-auto mt-2 flex w-2/3">
          <slot name="extra-button"></slot>
        </div>
      </ul>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, ref } from "vue";
const dropdownRef = ref(null);

// Definicja interfejsu dla elementów menu
interface MenuItem {
  text: string;
  url: string;
}

// Definicja interfejsu dla props
interface Props {
  menuItems: MenuItem[];
}

// Definiowanie props z domyślną wartością jako funkcja zwracająca tablicę
const props = withDefaults(defineProps<Props>(), {
  menuItems: () =>
    [
      { text: "blablaba", url: "/dashboard" },
      { text: "adnaiwdni", url: "/settings" },
    ] as MenuItem[], // Określ typ domyślnej wartości
});
</script>
