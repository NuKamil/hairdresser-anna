<template>
  <div id="about_me" class="flex h-screen shrink-0 snap-start items-center md:bg-kamil-blue-light">
    <div id="myUl" class="mx-6 items-center gap-16 md:mx-28 md:flex">
      <div class="mb-9 md:mb-0">
        <img
          :src="picture"
          alt=""
          class="mx-auto h-64 rounded-lg object-cover shadow-xl md:h-max"
        />
      </div>
      <section class="font-sans text-kamil-blue-dark">
        <h1 class="mb-1 text-2xl text-kamil-orange-dark md:text-4xl">WHO AM I</h1>
        <div class="text-pretty text-xs md:text-sm">
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
const picture = "Pictures/DSC00012.png";

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
