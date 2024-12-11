<template>
  <main class="max-w-2xl mx-auto px-4">
    <nav class="font-medium text-center text-gray-500 border-b border-gray-200 mb-5">
      <ul class="flex flex-wrap -mb-px">
        <li v-for="tab in tabs" :key="tab.key">
          <TabLink :tab="tab" :currentTab="currentTab" @click="currentTab = tab.key" />
        </li>
      </ul>
    </nav>
    <FadeTransition>
      <KeepAlive>
        <component :is="currentTabComponent"> </component>
      </KeepAlive>
    </FadeTransition>
  </main>
</template>

<script setup lang="ts">
import type { Tab, Tabkey } from './types'
import { ref, computed } from 'vue'
import TabLink from './components/TabLink.vue'
import GeneralSetttings from './components/GeneralSetttings.vue'
import NotificationsSettings from './components/NotificationsSettings.vue'
import PrivacySettings from './components/PrivacySettings.vue'
import FadeTransition from './components/FadeTransition.vue'

const tabs: Tab[] = [
  {
    key: 'General',
    label: 'General',
    component: GeneralSetttings,
  },
  {
    key: 'Notifications',
    label: 'Notifications',
    component: NotificationsSettings,
  },
  {
    key: 'Privacy',
    label: 'Privacy',
    component: PrivacySettings,
  },
]

const currentTab = ref<Tabkey>('General')
const currentTabComponent = computed(
  () => tabs.find((tab) => tab.key === currentTab.value)?.component,
)
</script>
