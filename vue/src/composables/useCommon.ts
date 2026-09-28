import { ref } from 'vue'

const commonTitle = ref('welcome!')

export function useCommon() {
  return {
    commonTitle
  }
}