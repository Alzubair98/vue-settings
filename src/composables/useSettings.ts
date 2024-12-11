import { ref, watch } from 'vue'

interface GeneralSettings {
  username: string
  email: string
  about: string
  gender: string
  country: string
}

const general = ref<GeneralSettings>(
  (() => {
    const stored = localStorage.getItem('general')

    return stored !== null
      ? JSON.parse(stored)
      : {
          about: '',
          country: 'USA',
          gender: 'male',
          email: '',
          username: '',
        }
  })(),
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
