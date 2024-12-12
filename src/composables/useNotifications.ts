import { ref } from 'vue'

interface Notification {
  id: number
  message: string
}

const notification = ref<Notification[]>([])

const addNotification = (message: string) => {
  const id = Date.now()
  notification.value.push({ id, message })

  setTimeout(() => removeNotifiation(id), 5000)
}

const removeNotifiation = (id: number) => {
  notification.value = notification.value.filter((n) => n.id !== id)
}

export function useNotifications() {
  return {
    notification,
    addNotification,
    removeNotifiation,
  }
}
