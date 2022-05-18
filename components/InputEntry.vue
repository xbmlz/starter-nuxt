<script setup lang="ts">
import { ElButton, ElInput } from "element-plus";
const name = ref("");

const router = useRouter();
const go = () => {
  if (name.value) router.push(`/hi/${encodeURIComponent(name.value)}`);
};
</script>

<template>
  <div>
    <el-input
      id="input"
      v-model="name"
      placeholder="What's your name?"
      autocomplete="off"
      style="width: 250px"
      class="mb-6"
      @keydown.enter="go"
    />
    <div>
      <el-button :disabled="!name" @click="go">GO</el-button>
    </div>
  </div>
</template>
