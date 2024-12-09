<template>
  <main>hello</main>
</template>

<script setup lang="ts">
import type { Tab } from './types'
import { ref } from 'vue'

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

const currentTab = ref<string>('General')
console.log(currentTab)
</script>
