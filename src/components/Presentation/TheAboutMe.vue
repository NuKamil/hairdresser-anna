<template>
  <div id="about_me" class="flex min-h-screen shrink-0 snap-start justify-center">
    <div id="myUl" class="mx-4 my-auto mt-16">
      <h1 class="mb-1 text-center text-2xl text-kamil-orange-dark md:text-4xl">ABOUT ME</h1>
      <ul
        class="no-scrollbar mb-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth p-4"
        :class="{
          'gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4': isWideScreen,
        }"
      >
        <li
          v-for="(item, index) in pictures"
          :key="index"
          class="h-52 w-full flex-shrink-0 snap-center md:h-72 md:w-64 lg:h-auto lg:w-auto"
        >
          <img
            :src="Object.values(item)[0]"
            alt=""
            class="h-full w-full transition-transform duration-500 hover:scale-150"
          />
        </li>
      </ul>
      <!-- <img :src="urlHeaderPicture" alt="" class="midn-h-full absolute -z-10 w-auto" /> -->
      <section class="flex font-sans text-kamil-blue-dark">
        <div>
          For 17 år siden kom en ung jente fra Polen til Norge med en stor drøm. Hun hadde nylig
          fullført sin utdanning som frisør i hjemlandet, og med en lidenskap for faget bestemte hun
          seg for å ta steget og starte et nytt liv her i Norge. Hun visste at det ikke ville bli
          lett – et nytt språk, en ny kultur og mange utfordringer lå foran henne. Men hun var
          bestemt på å gjøre alt hun kunne for å realisere drømmen om å jobbe som frisør. Hun
          startet med å lære seg norsk og begynte å knytte kontakter i frisørmiljøet. Med
          tålmodighet og hardt arbeid begynte hun sakte, men sikkert å bygge opp sin karriere.
          Kundene la merke til hennes talent og lidenskap for faget, og hun ble kjent for sitt
          dyktige håndverk. Hennes drøm om å bli frisør i Norge ble etter hvert en realitet. I dag
          lever hun ut sitt liv som frisør i Norge, hvor hun hver dag får gjøre det hun elsker.
          Hennes reise er et bevis på at med lidenskap og målrettet arbeid kan man oppnå sine
          drømmer, uansett hvor langt unna de måtte virke.
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const urlHeaderPicture = "/Pictures/beauty-salon-4043096_1920.jpg";

const pictures = ref([
  { picture1: "Pictures/beauty-salon-4043096_1920.jpg" },
  { picture2: "Pictures/hair-4556496_1920.jpg" },
  { picture3: "Pictures/hairdresser-3173438_1920.jpg" },
  { picture4: "Pictures/hairdresser-4682908_1920.jpg" },
]);

// Zmienna sprawdzająca szerokość ekranu
const isWideScreen = ref(false);

// Sprawdzanie rozmiaru ekranu przy zamontowaniu komponentu
const checkScreenSize = () => {
  isWideScreen.value = window.innerWidth >= 1024;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});
</script>

<style scoped></style>
