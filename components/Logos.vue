<template>
  <div class="inline-flex text-2xl font-300 cursor-default">
    <!-- nuxt -->
    <div class="flex flex-col children:mx-auto">
      <img class="w-18 h-18 inline-block" src="/nuxt.png" />
      <span class="text-green-500 -mt-2">Nuxt 3</span>
    </div>
    <Icon
      class="text-3xl text-gray-500 mx-4 my-auto transition-all duration-500 ease-in-out transform hover:rotate-135"
      icon="mdi-light:plus"
    />
    <!-- element-plus -->
    <div class="flex flex-col children:mx-auto">
      <img class="w-18 h-18 inline-block" src="/element-plus.png" />
      <span class="text-blue-400 -mt-2">Element-Plus</span>
    </div>
    <Icon
      class="text-3xl text-gray-500 mx-4 my-auto transition-all duration-500 ease-in-out transform hover:rotate-135"
      icon="mdi-light:plus"
    />
    <!-- windicss -->
    <div class="flex flex-col children:mx-auto">
      <img class="w-18 h-18 inline-block" src="/windicss.png" />
      <span class="text-blue-400 -mt-2">Windi CSS</span>
    </div>
    <Icon
      class="text-3xl text-gray-500 mx-4 my-auto transition-all duration-500 ease-in-out transform hover:rotate-135"
      icon="mdi-light:plus"
    />
    <!-- iconify -->
    <div class="flex flex-col children:mx-auto">
      <img class="w-18 h-18 inline-block" src="/iconify.png" />
      <span class="text-sky-800 -mt-2">iconify</span>
    </div>
    <Icon
      class="text-3xl text-gray-500 mx-4 my-auto transition-all duration-500 ease-in-out transform hover:rotate-135"
      icon="mdi-light:plus"
    />
    <!-- pinia -->
    <div class="flex flex-col children:mx-auto">
      <img class="w-18 h-18 inline-block" src="/pinia.png" />
      <span class="text-yellow-300 -mt-2">Pinia</span>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
</script>
