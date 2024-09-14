<template>
  <div class="flex flex-col text-sm">
    <button
      @click="toggleDropdown"
      class="border-1 relative rounded-full border-solid border-kamil-orange-dark bg-kamil-orange-dark p-1 transition-shadow duration-300 hover:shadow-blue"
    >
      <img :src="image" alt="" class="h-12 w-12 rounded-full object-contain object-center" />
    </button>

    <!-- Dropdown -->
    <dropdown v-show="isOpen">
      <template #extra-button>
        <action-button :is-logged="props.isLogged" @click="handleClick" />
      </template>
    </dropdown>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Dropdown from "@/components/Shared/Dropdown.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";

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
