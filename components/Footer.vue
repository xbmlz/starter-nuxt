<script setup>
import { Icon } from "@iconify/vue";
</script>
<template>
  <div class="text-xl text-gray-400 m-5 flex justify-center gap-3">
    <NuxtLink to="/">
      <Icon icon="carbon:campsite" />
    </NuxtLink>
    <a href="https://github.com/xbmlz/nuxt-starter" target="_blank">
      <Icon icon="carbon:logo-github" />
    </a>
  </div>
</template>
