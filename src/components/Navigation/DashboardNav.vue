<template>
  <header class="w-full font-semibold">
    <div class="fixed left-0 top-0 h-16 w-full">
      <div class="flex h-full w-full">
        <!-- Navbar widoczny tylko na większych ekranach -->
        <nav
          class="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 transform text-lg md:flex"
        >
          <ul class="flex h-full list-none justify-center font-sans text-kamil-orange-dark">
            <li class="ml-9 h-full first:ml-0" v-for="menuItem in items" :key="menuItem.text">
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

        <!-- Hamburger menu, widoczne na małych ekranach -->
        <div class="ml-5 mr-auto flex h-full items-center md:hidden">
          <HamburgerMenu />
        </div>

        <!-- Przyciski widoczne na większych ekranach -->
        <div class="ml-auto mr-5 flex h-full items-center">
          <profile-controls v-if="userStore.isUserLogged" />
          <action-button @click="login" v-else />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";

import ActionButton from "@/components/Shared/ActionButton.vue";
import HamburgerMenu from "@/components/Navigation/HamburgerMenu.vue";
import ProfileControls from "@/components/Navigation/ProfileControls.vue";
import { useRouter } from "vue-router";

defineProps<{ items: { text: string; url: string }[] }>()

const router = useRouter();
const userStore = useUserStore();

const isActiveLink = (routePath: string): boolean => {
  const route = useRoute();
  return route.path === routePath;
};

const login = (): void => {
  router.push({
    name: "Login",
  });
};
</script>

<style></style>
