<template>
  <div class="bg-white text-kamil-blue-dark">
    <ul
      class="absolute right-0 flex h-max w-max origin-top-right flex-col items-center rounded-md p-2 py-1 shadow-lg"
    >
      <li>
        <a href="#" class="select-effect">Dashboard</a>
      </li>
      <li>
        <a href="#">Settings</a>
      </li>
      <li>
        <a href="#">text3</a>
      </li>

      <li>
        <slot name="extra-button"></slot>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>
