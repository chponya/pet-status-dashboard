<script setup lang="ts">
import MetricCard from './MetricCard.vue'

import { usePetMetrics } from '../../composables/usePetMetrics'

const metrics = usePetMetrics()
</script>

<template>
  <div class="metrics">

    <MetricCard
    title="Mood"
    :value="metrics.mood.value"
    />

    <MetricCard
    title="Energy"
    :value="metrics.energy.value"
    />

    <MetricCard
    title="Health"
    :value="metrics.health.value"
    />

    <MetricCard
    title="Activity"
    :value="metrics.activity.value"
    />

  </div>
</template>