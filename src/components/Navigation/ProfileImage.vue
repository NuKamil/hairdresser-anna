<template>
  <div class="flex h-full items-center justify-center">
    <div class="mr-3 flex h-full items-center text-2xl text-kamil-blue-dark">
      <div class="mx-3 flex">
        <button class="mr-2">
          <font-awesome-icon :icon="['fas', 'heart']" class="text-kamil-orange-dark" />
        </button>
        <button class="relative shadow-kamil-blue-light">
          <font-awesome-icon :icon="['fas', 'bag-shopping']" class="text-kamil-orange-dark" />
          <span
            class="absolute left-3 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-kamil-blue-light text-xs"
          >
            3
          </span>
        </button>
      </div>
      <span class="cursor-default">123,40</span>
    </div>
    <div class="flex flex-col text-sm">
      <button
        @click="toggleDropdown"
        class="border-1 relative rounded-full border-solid border-kamil-orange-dark bg-kamil-orange-dark p-1 transition-shadow duration-300 hover:shadow-blue"
      >
        <img :src="image" alt="" class="h-8 w-8 rounded-full object-contain object-center" />
      </button>

      <!-- Dropdown -->
      <dropdown v-show="isOpen">
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
import { icon } from "@fortawesome/fontawesome-svg-core";

const image = ref("/Pictures/20240907_102924.jpg");

const emit = defineEmits(["login"]);

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
