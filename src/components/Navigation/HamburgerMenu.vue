<template>
  <div ref="dropdownRef">
    <!-- Ikona hamburgera widoczna na małych ekranach -->
    <button @click="toggleMenu" class="flex items-center text-kamil-orange-dark md:hidden">
      <svg
        class="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </button>

    <!-- Menu mobilne - pojawia się po kliknięciu ikony hamburgera -->
    <dropdown v-if="isOpen" :menu-items="menuItems" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Dropdown from "@/components/Shared/Dropdown.vue";

// Obsługa otwierania i zamykania menu
const isOpen = ref(false);
const dropdownRef = ref(null);

const menuItems = ref([
  { text: "HOME", url: "/" },
  { text: "SHOP", url: "/shop" },
  { text: "NEWS", url: "/news" },
  { text: "BOOK NOW", url: "/book" },
]);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false; // Zamknij dropdown, jeśli kliknięto poza nim
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
/* Dostosowanie animacji wchodzenia i wychodzenia */
</style>
