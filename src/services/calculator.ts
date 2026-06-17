import type { PetInput } from '../types/pet'

export function calculateMood(data: PetInput) {
  return (
    data.hunger +
    data.sleep +
    data.fun +
    data.cleanliness +
    data.social
  ) / 5
}

export function calculateEnergy(data: PetInput) {
  return data.sleep * 0.7 + data.hunger * 0.3
}

export function calculateHealth(data: PetInput) {
  return data.hunger * 0.5 + data.cleanliness * 0.5
}

export function calculateActivity(
  fun: number,
  energy: number
) {
  return (fun + energy) / 2
}