<template>
  <div class="flex h-full items-center justify-center">
    <div class="relative mr-3 flex h-full items-center text-2xl text-kamil-blue-dark">
      <!-- Profile Icon buttons -->
      <div class="mx-3 flex">
        <button class="mr-2">
          <font-awesome-icon
            :icon="['fas', 'heart']"
            class="text-kamil-orange-dark transition-colors duration-300 hover:text-kamil-green-light"
          />
        </button>
        <button class="relative shadow-kamil-blue-light">
          <font-awesome-icon
            :icon="['fas', 'bag-shopping']"
            class="rounded-full text-kamil-orange-dark transition-colors duration-300 hover:text-kamil-green-light"
          />
          <span
            class="min-w-auto absolute bottom-4 left-3 flex aspect-square items-center justify-center rounded-full bg-kamil-blue-light px-1 text-xs"
          >
            13
          </span>
        </button>
      </div>
      <span class="cursor-default text-lg">8340</span>
    </div>

    <!-- Profile Image -->
    <button
      @click.stop="dropdownStore.toggleDropdown('profile')"
      class="border-1 relative h-10 w-10 rounded-full border-solid border-kamil-orange-dark bg-kamil-orange-dark p-1 transition-shadow duration-300 hover:shadow-blue"
    >
      <img :src="image" alt="" class="h-full w-full overflow-hidden rounded-full object-cover" />
    </button>

    <!-- Dropdown -->
    <dropdown v-model="isOpen.profile" :menu-items="menuItems" menu-type="profile" ref="dropdown">
      <template #extra-button>
        <action-button @click="handleClick" />
      </template>
    </dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDropdownStore } from "@/stores/dropdown";
import { useUserStore } from "@/stores/user";
import Dropdown from "@/components/Shared/Dropdown.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";

const image = ref("Pictures/20240907_102924.jpg");

const dropdownStore = useDropdownStore();
const userStore = useUserStore();
const isOpen = dropdownStore.isOpen;

const dropdown = ref(null);
const menuItems = ref([
  { text: "Dashboard", url: "/dashboard" },
  { text: "Settings", url: "/settings" },
  { text: "Purchase History", url: "/purchase" },
]);

const handleClick = () => {
  userStore.toggleLoggin();
};
</script>
