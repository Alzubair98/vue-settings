import GeneralSetttings from '@/components/GeneralSetttings.vue'
import { ref } from 'vue'
interface GeneralSettings {
  username: string
  email: string
  about: string
  gender: string
  country: string
}

const general = ref<GeneralSetttings>({
  about: '',
  country: 'USA',
  gender: 'male',
  email: '',
  username: '',
})
