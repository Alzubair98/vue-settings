<template>
  <div>
    <h2 class="text-2xl mb-4">Notifications</h2>
    <form class="space-y-4 mx-auto" @submit.prevent="save">
      <div class="flex items-center gap-1">
        <input type="checkbox" v-model="notification.email" />
        <label> Email Notification </label>
      </div>
      <div class="flex items-center gap-1">
        <input type="checkbox" v-model="notification.sms" />
        <label> SMS Notification</label>
      </div>
      <button type="submit" class="btn-primary">Save</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useSettings } from '../composables/useSettings'
import { useNotifications } from '../composables/useNotifications'

const { notification } = useSettings()
const { addNotification } = useNotifications()

const save = () => {
  addNotification('Notifications Saved')
}
</script>
