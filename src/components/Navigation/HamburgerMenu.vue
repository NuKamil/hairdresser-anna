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
    <transition name="fade">
      <div
        v-if="isOpen"
        class="absolute right-0 top-16 w-full scale-95 transform bg-white opacity-0 md:hidden"
        :class="{ 'scale-100 opacity-100': isOpen }"
      >
        <ul class="flex flex-col items-center space-y-4 px-9 py-4 shadow-lg">
          <!-- Slot dla elementów menu -->
          <slot name="menu-items"></slot>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Obsługa otwierania i zamykania menu
const isOpen = ref(false);
const dropdownRef = ref(null);

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
