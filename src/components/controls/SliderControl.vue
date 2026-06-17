<script setup lang="ts">

defineProps<{
  title: string
}>()

const model = defineModel<number>({
  required: true
})

</script>

<template>

  <div>

    <p>{{ title }} {{ model }}</p>

    <input
      type="range"
      min="0"
      max="100"
      v-model="model"
    />

  </div>

</template>