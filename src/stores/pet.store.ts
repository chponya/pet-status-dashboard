import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePetStore = defineStore('pet', () => {

  const hunger = ref(70)
  const sleep = ref(45)
  const fun = ref(80)
  const cleanliness = ref(65)
  const social = ref(50)

  return {
    hunger,
    sleep,
    fun,
    cleanliness,
    social
  }
})