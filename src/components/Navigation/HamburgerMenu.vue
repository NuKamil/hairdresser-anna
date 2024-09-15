<template>
  <div ref="dropdownRef">
    <!-- Ikona hamburgera widoczna na małych ekranach -->
    <button @click="toggleMenu" class="text-kamil-orange-dark md:hidden">
      <svg
        class="h-10 w-10"
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
    <div v-show="isOpen" class="absolute right-0 top-16 w-full bg-white md:hidden">
      <ul class="flex flex-col items-center space-y-4 py-4 shadow-lg">
        <!-- Slot dla elementów menu -->
        <slot
          class="w-full border-b border-solid border-kamil-green-light"
          name="menu-items"
        ></slot>
        <!-- Slot dla dodatkowych przycisków (np. Sign In) -->
        <slot name="extra-button"></slot>
      </ul>
    </div>
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
