<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ElButton, ElInput } from "element-plus";

const route = useRoute()
const user = useUserStore()
const name = route.params.id

watchEffect(() => {
  user.setNewName(route.params.id as string)
})

definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div>
    <Icon icon="twemoji:waving-hand" class="text-4xl inline-block animate-shake-x animate-duration-5000" />
    <h3 class="text-2xl font-500 my-0">
      Hi,
    </h3>
    <div class="text-xl">
      {{ name }}!
    </div>

    <template v-if="user.otherNames.length">
      <p class="text-sm my-4">
        <span class="op-50">Also as known as:</span>
        <ul class="list-none p-0 m-0">
          <li v-for="otherName in user.otherNames" :key="otherName">
            <router-link :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </router-link>
          </li>
        </ul>
      </p>
    </template>

    <!-- <Counter /> -->

    <div>
      <NuxtLink
        class="btn m-3 text-sm"
        to="/"
      >
        Back
      </NuxtLink>
    </div>
  </div>
</template>