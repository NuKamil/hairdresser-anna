<template>
  <!-- Ikona hamburgera widoczna na małych ekranach -->
  <button
    @click.stop="dropdownStore.toggleDropdown('hamburger')"
    class="relative flex items-center text-kamil-orange-dark md:hidden"
  >
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
  <div>
    <!-- Menu mobilne - pojawia się po kliknięciu ikony hamburgera -->
    <dropdown
      v-model="isOpen.hamburger"
      :menu-items="menuItems"
      menu-type="hamburger"
      ref="dropdown"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDropdownStore } from "@/stores/dropdown";
import Dropdown from "@/components/Shared/Dropdown.vue";

const dropdownStore = useDropdownStore();
const isOpen = dropdownStore.isOpen;
const dropdown = ref(null);
const menuItems = ref([
  { text: "Home", url: "/" },
  { text: "Shop", url: "/shop" },
  { text: "News", url: "/news" },
  { text: "Book Now", url: "/book" },
]);
</script>
