<template>
  <main class="max-w-2xl mx-auto px-4">
    <nav class="font-medium text-center text-gray-500 border-b border-gray-200 mb-5">
      <ul class="flex flex-wrap -mb-px">
        <li v-for="tab in tabs" :key="tab.key">
          <TabLink :tab="tab" :currentTab="currentTab" @click="currentTab = tab.key" />
        </li>
      </ul>
    </nav>
  </main>
</template>

<script setup lang="ts">
import type { Tab, Tabkey } from './types'
import { ref } from 'vue'
import TabLink from './components/TabLink.vue'

const tabs: Tab[] = [
  {
    key: 'General',
    label: 'General',
  },
  {
    key: 'Notifications',
    label: 'Notifications',
  },
  {
    key: 'Privacy',
    label: 'Privacy',
  },
]

const currentTab = ref<Tabkey>('General')
console.log(currentTab)
</script>
