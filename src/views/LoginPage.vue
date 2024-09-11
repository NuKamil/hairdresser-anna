<template>
  <div class="h-screen bg-slate-300">
    <div class="full mx-auto flex h-full w-2/3 items-center justify-center">
      <div class="flex rounded-lg border-0 bg-white shadow-lg">
        <section class="m-6 w-full md:w-1/2">
          <form action="#" class="mx-auto space-y-6">
            <h3 class="text-xl font-medium text-kamil-blue-dark">Sign in to our salon</h3>
            <div class="">
              <label for="email" class="text-kamil-orange-dark">Your email</label>
              <input
                type="email"
                class="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow-lg transition-all duration-500 ease-linear focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div class="">
              <label for="password" class="text-kamil-orange-dark">Your password</label>
              <input
                type="password"
                class="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow-lg transition-all duration-500 ease-linear focus:outline-none"
                placeholder="**********"
              />
            </div>
            <div class="flex">
              <div class="flex h-5 items-center">
                <input type="checkbox" name="" id="remember" />
              </div>
              <div class="ml-3 text-sm">
                <label for="remember" class="font-medium text-kamil-blue-dark">Remember me</label>
              </div>
              <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                >Lost Password?</a
              >
            </div>
            <button
              type="submit"
              class="w-full rounded-full border-0 bg-kamil-orange-dark px-3 py-2 text-kamil-blue-dark transition-shadow duration-300 hover:shadow-blue"
            >
              Login to your account
            </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?
              <a href="#" class="text-blue-700 hover:underline dark:text-blue-500"
                >Create account</a
              >
            </div>
          </form>
        </section>
        <section class="hidden md:flex md:w-1/2">
          <img :src="url" alt="" class="h-full w-full rounded-r-lg object-cover object-center" />
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const url = "/Pictures/beauty-salon-4043096_1920.jpg";
</script>
