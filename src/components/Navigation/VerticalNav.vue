<template>
  <!-- <img class="relative top-0 h-7" :src="scissorsUrl" alt="" /> -->
  <ul class="ml-2 w-max font-sans text-lg text-white">
    <li class="button-effect cursor-pointer" v-for="item in menuItems" :key="item.hash">
      <a
        :href="item.hash"
        @click.prevent="scrollToSection(item)"
        :class="{ 'kamil-orange-1': activeSection === item.hash }"
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

const handleScroll = () => {
  for (const item of menuItems.value) {
    const section = document.getElementById(item.hash);
    if (section && section.getBoundingClientRect().top < window.innerHeight / 2) {
      activeSection.value = item.hash;
      break;
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
