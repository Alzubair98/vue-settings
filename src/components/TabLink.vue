<template>hello</template>

<script setup lang="ts">
defineProps<{
  currentTab: string
  tab: {
    name: string
    label: string
  }
}>()
</script>
