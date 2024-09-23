<template>
  <transition
    name="fade"
    v-show="dropdownStore.isOpen[menuType]"
    class="text-kamil-blue-dark"
    ref="dropdownRef"
  >
    <ul
      class="absolute right-0 top-0 z-[-10] h-max w-full origin-top-right flex-col rounded-md bg-white p-3 py-2 pt-16 shadow-lg md:top-16 md:w-auto md:pt-0"
    >
      <li class="select-effect flex justify-center py-1" v-for="item in menuItems" :key="item.text">
        <router-link :to="item.url">{{ item.text }}</router-link>
      </li>
      <div class="mx-auto mt-2 flex w-2/3">
        <slot name="extra-button"></slot>
      </div>
    </ul>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useDropdownStore } from "@/stores/dropdown";

interface MenuItem {
  text: string;
  url: string;
}

interface DropdownProps {
  menuItems: MenuItem[];
  menuType: "hamburger" | "profile";
}

const props = defineProps<DropdownProps>();
const dropdownStore = useDropdownStore();

const dropdownRef = ref(null);

// Zamknij dropdown przy kliknięciu poza nim
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    dropdownStore.closeAllDropdowns();
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
