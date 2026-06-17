export function getPetSprite(
  mood: number,
  health: number,
  sleep: number,
  fun: number
) {
  if (health < 40) return 'sick'
  if (sleep < 40) return 'sleepy'
  if (fun < 40) return 'bored'
  if (mood >= 80) return 'happy'

  return 'normal'
}