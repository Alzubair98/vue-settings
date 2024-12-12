import { ref, watch } from 'vue'

interface GeneralSettings {
  username: string
  email: string
  about: string
  gender: string
  country: string
}

const init = <T>(key: string, defaults: T) => {
  const stored = localStorage.getItem(key)
  return stored !== null ? JSON.parse(stored) : defaults
}

const general = ref<GeneralSettings>(
  init<GeneralSettings>('general', {
    about: '',
    country: 'USA',
    gender: 'male',
    email: '',
    username: '',
  }),
)

watch(general, (value) => localStorage.setItem('general', JSON.stringify(value)), { deep: true })

interface NotificationsSetting {
  email: boolean
  sms: boolean
}

const notification = ref<NotificationsSetting>({
  email: false,
  sms: false,
})

interface PrivacySetting {
  visbility: visbility
  searchEngineIndexing: boolean
}

type visbility = 'public' | 'private'

const privacy = ref<PrivacySetting>({
  searchEngineIndexing: false,
  visbility: 'public',
})
export function useSettings() {
  return {
    general,
    privacy,
    notification,
  }
}
