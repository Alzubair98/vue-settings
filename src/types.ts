import type { Component } from 'vue'

export type Tabkey = 'General' | 'Notifications' | 'Privacy'

export interface Tab {
  key: Tabkey
  label: string
  component: Component
}
