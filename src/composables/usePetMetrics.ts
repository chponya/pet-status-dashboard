import { computed } from 'vue'

import { usePetStore } from '../stores/pet.store'

import {
  calculateMood,
  calculateEnergy,
  calculateHealth,
  calculateActivity
} from '../services/calculator'

export function usePetMetrics() {
  const pet = usePetStore()

  const mood = computed(() =>
    calculateMood({
      hunger: pet.hunger,
      sleep: pet.sleep,
      fun: pet.fun,
      cleanliness: pet.cleanliness,
      social: pet.social
    })
  )

  const energy = computed(() =>
    calculateEnergy({
      hunger: pet.hunger,
      sleep: pet.sleep,
      fun: pet.fun,
      cleanliness: pet.cleanliness,
      social: pet.social
    })
  )

  const health = computed(() =>
    calculateHealth({
      hunger: pet.hunger,
      sleep: pet.sleep,
      fun: pet.fun,
      cleanliness: pet.cleanliness,
      social: pet.social
    })
  )

  const activity = computed(() =>
    calculateActivity(
      pet.fun,
      energy.value
    )
  )

  return {
    mood,
    energy,
    health,
    activity
  }
}