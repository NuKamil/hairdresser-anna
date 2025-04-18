<script setup lang="ts">
import { onMounted } from "vue";
import { useHairServicesStore, FETCH_HAIR_SERVICES } from "@/stores/hairServices";

const store = useHairServicesStore();

// Po zamontowaniu komponentu pobierz usługi
onMounted(() => {
  store[FETCH_HAIR_SERVICES]();
});
</script>

<template>
  <div>
    <h2>Nasze usługi ({{ store.count }})</h2>
    <ul>
      <li v-for="s in store.hairServices" :key="s.hair_service_id">
        {{ s.name }} — {{ s.price }} zł, {{ s.duration }} min
      </li>
    </ul>
    <button @click="store[FETCH_HAIR_SERVICES]()">Odśwież</button>
  </div>
</template>