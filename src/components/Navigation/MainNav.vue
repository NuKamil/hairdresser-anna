<template>
  <header class="w-full text-lg font-semibold">
    <div class="fixed left-0 top-0 h-16 w-full">
      <div class="mx-auto flex h-full w-full">
        <!-- Navbar widoczny tylko na większych ekranach -->
        <nav class="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 transform md:flex">
          <ul class="flex h-full list-none justify-center font-sans text-kamil-orange-dark">
            <li class="ml-9 h-full first:ml-0" v-for="menuItem in menuItems" :key="menuItem.text">
              <router-link
                :class="[
                  'flex',
                  'h-full',
                  'items-center',
                  isActiveLink(menuItem.url) ? 'text-kamil-orange-dark' : 'select-effect',
                ]"
                :to="menuItem.url"
              >
                {{ menuItem.text }}
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- Przyciski widoczne na większych ekranach -->
        <div class="ml-auto mr-5 hidden h-full items-center md:flex">
          <profile-image v-if="isLogged" />
          <action-button @click="login" :is-logged="isLogged" v-else />
        </div>

        <!-- Hamburger menu, widoczne na małych ekranach -->
        <HamburgerMenu>
          <!-- Przekazanie slotów do HamburgerMenu -->
          <template #menu-items>
            <li v-for="menuItem in menuItems" :key="menuItem.url">
              <router-link
                :class="[isActiveLink(menuItem.url) ? 'text-kamil-orange-dark' : 'text-black']"
                :to="menuItem.url"
              >
                {{ menuItem.text }}
              </router-link>
            </li>
          </template>

          <template #extra-button>
            <action-button @click="login" :is-logged="isLogged" />
          </template>
        </HamburgerMenu>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import ActionButton from "@/components/ActionButton.vue";
import HamburgerMenu from "@/components/Navigation/HamburgerMenu.vue"; // Import komponentu
import ProfileImage from "@/components/ProfileImage.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const isLogged = ref(true);

const menuItems = ref([
  { text: "HOME", url: "/" },
  { text: "SHOP", url: "/shop" },
  { text: "NEWS", url: "/news" },
  { text: "BOOK NOW", url: "/book" },
]);

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};

const login = () => {
  if (isLogged.value === false) {
    router.push({
      name: "Login",
    });
  }
};
</script>

<style></style>
