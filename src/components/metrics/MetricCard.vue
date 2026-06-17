<script setup lang="ts">
defineProps<{
  title: string
  value: number
}>()
</script>

<template>
  <div class="card">
    <h3>{{ title }}</h3>

    <p>{{ Math.round(value) }}%</p>
  </div>
</template>