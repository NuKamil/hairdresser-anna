<template>
  <section
    id="section_02"
    class="font-bolt flex max-w-screen-md flex-col items-center justify-center space-y-4 rounded-md p-5 font-sans text-lg text-black md:text-2xl"
  >
    <div class="flex w-fit items-center justify-between text-center">
      <!-- <img :src="scissorsUrl" alt="" class="h-4 md:h-9" /> -->
      <div class="mx-4 h-full w-full">VELKOMMEN TIL OSS</div>
      <!-- <img :src="scissorsUrl" alt="" class="h-4 scale-x-[-1] md:h-9" /> -->
    </div>
    <div class="flex items-center space-x-4">
      <span>FRISØR</span>
      <span class="text-4xl text-orange-300 md:text-9xl">ANNA</span>
      <span>SALONG</span>
    </div>
    <div class="text-center">
      Velkommen til ANNA salong stedet hvor skjønnhet og velvære møtes! La vårt erfarne team ta vare
      på deg og gi deg den perfekte frisyren du fortjener. Kom innom og la oss skape magi med håret
      ditt! Vi gleder oss til å se deg.
    </div>
  </section>
</template>

<script setup>
const scissorsUrl = "./Svg/scissors.svg";
</script>
