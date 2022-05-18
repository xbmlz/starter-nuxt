<template>
  <div>
    <h1 class="text-red-600">Index Page</h1>
    <Icon icon="mdi-light:home" />
    <el-button class="m-4" @click="hello">Hello</el-button>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ElButton } from "element-plus";
</script>

<style scoped></style>
