<template>
  <ul class="hidden w-max flex-col font-sans text-lg md:flex">
    <li class="mb-5 rotate-45 cursor-pointer" v-for="item in menuItems" :key="item.hash">
      <a :href="item.hash" @click.prevent="scrollToSection(item)"
        ><div
          :class="[
            'h-3',
            'w-3',
            activeSection === item.hash ? 'bg-kamil-orange-dark' : 'bg-kamil-blue-dark',
            'transition-colors duration-300 hover:bg-kamil-orange-dark',
            'transition-transform duration-300 hover:rounded-full',
          ]"
        ></div
      ></a>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import { onMounted, onUnmounted } from "vue";

const menuItems = ref([
  { text: "Main", hash: "main" },
  { text: "About Me", hash: "about_me" },
  { text: "Services", hash: "services" },
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
let observer;

const onIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeSection.value = entry.target.id;
    }
  });
};

onMounted(() => {
  observer = new IntersectionObserver(onIntersect, {
    threshold: 0.6, // 60% elementu musi być widoczne, aby uznać go za "intersecting"
  });

  menuItems.value.forEach((item) => {
    const section = document.getElementById(item.hash);
    if (section) {
      observer.observe(section);
    }
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
