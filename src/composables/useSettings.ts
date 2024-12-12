import { ref, watch } from 'vue'

interface SettingsMap {
  general: GeneralSettings
  privacy: PrivacySetting
  notifications: NotificationsSetting
}

type SettingsKey = keyof SettingsMap

interface GeneralSettings {
  username: string
  email: string
  about: string
  gender: string
  country: string
}

const init = <T extends SettingsKey>(key: T, defaults: SettingsMap[T]) => {
  const stored = localStorage.getItem(key)
  return stored !== null ? JSON.parse(stored) : defaults
}

const general = ref<GeneralSettings>(
  init('general', {
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

const notification = ref<NotificationsSetting>(
  init('notifications', {
    email: false,
    sms: false,
  }),
)

interface PrivacySetting {
  visbility: visbility
  searchEngineIndexing: boolean
}

type visbility = 'public' | 'private'

const privacy = ref<PrivacySetting>(
  init('privacy', {
    visbility: 'public',
    searchEngineIndexing: false,
  }),
)
export function useSettings() {
  return {
    general,
    privacy,
    notification,
  }
}
