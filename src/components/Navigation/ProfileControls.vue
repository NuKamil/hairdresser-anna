<template>
  <div class="flex h-full items-center justify-center">
    <div class="mr-3 flex h-full items-center text-2xl text-kamil-blue-dark">
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
    <div class="flex flex-col text-sm">
      <button
        @click="toggleDropdown"
        class="border-1 relative h-10 w-10 rounded-full border-solid border-kamil-orange-dark bg-kamil-orange-dark p-1 transition-shadow duration-300 hover:shadow-blue"
      >
        <img :src="image" alt="" class="h-full w-full overflow-hidden rounded-full object-cover" />
      </button>

      <!-- Dropdown -->
      <dropdown v-show="isOpen" :menu-items="menuItems">
        <template #extra-button>
          <action-button :is-logged="props.isLogged" @click="handleClick" />
        </template>
      </dropdown>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Dropdown from "@/components/Shared/Dropdown.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";

const image = ref("Pictures/20240907_102924.jpg");

const emit = defineEmits(["login"]);

const menuItems = ref([
  { text: "DASHBOARD", url: "/dashboard" },
  { text: "SETTINGS", url: "/settings" },
  { text: "PURCHASE HISTORY", url: "/purchase" },
]);

const props = defineProps({
  isLogged: {
    type: Boolean,
    default: false,
  },
});

const isOpen = ref(false);

const handleClick = () => {
  emit("login");
};

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style></style>
