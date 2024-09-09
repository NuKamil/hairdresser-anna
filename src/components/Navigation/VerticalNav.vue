<template>
  <!-- <img class="relative top-0 h-7" :src="scissorsUrl" alt="" /> -->
  <ul class="ml-2 w-max font-sans text-lg">
    <li class="cursor-pointer" v-for="item in menuItems" :key="item.hash">
      <a
        :href="item.hash"
        @click.prevent="scrollToSection(item)"
        :class="[activeSection === item.hash ? 'text-kamil-orange-1' : 'button-effect']"
        >{{ item.text }}
      </a>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import { onMounted, onUnmounted } from "vue";

const scissorsUrl = "./Svg/scissors.svg";

const menuItems = ref([
  { text: "Main", hash: "main" },
  { text: "About Me", hash: "about_me" },
  { text: "Gallery", hash: "gallery" },
  { text: "Contact", hash: "contact" },
  // itd.
]);

const activeSection = ref("main");

const scrollToSection = (item) => {
  const section = document.getElementById(item.hash);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    activeSection.value = item.hash;
  }
};
</script>
