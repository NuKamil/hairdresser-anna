<template>
  <div
    id="services"
    class="flex h-screen shrink-0 snap-start items-center bg-gradient-to-t from-white from-20% via-kamil-green-light via-40% to-white to-60%"
  >
    <div class="mx-6 my-auto w-full items-center justify-center gap-10 md:mx-28 md:flex">
      <div class="mx-auto h-auto md:max-w-sm">
        <section class="mb-7 font-sans text-kamil-blue-dark md:mb-0">
          <h1 class="mb-1 text-2xl text-kamil-orange-dark md:text-4xl">Our Services</h1>
          <div class="text-pretty text-xs md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod labore maxime est,
            accusantium tempora rerum iusto quibusdam error quia quasi architecto distinctio,
            voluptatibus quos delectus provident qui consequatur nam minus?
          </div>
        </section>
      </div>
      <div class="bg-red-400">
        <img
          :src="picture"
          alt=""
          class="mx-auto max-h-96 min-w-64 rounded-sm object-cover shadow-xl"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const picture = "Pictures/hairdresser-4666064_1920.jpg";
</script>
