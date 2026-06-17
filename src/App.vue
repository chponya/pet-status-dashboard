<script setup lang="ts">
import HeaderBar from './components/layout/HeaderBar.vue'

import ControlPanel from './components/controls/ControlPanel.vue'
import PetDisplay from './components/pet/PetDisplay.vue'
import MoodChart from './components/mood/MoodChart.vue'

import MetricsPanel from './components/metrics/MetricsPanel.vue'

import FooterInfo from './components/layout/FooterInfo.vue'
</script>

<template>
  <div class="app">

    <HeaderBar />

    <main class="dashboard">

      <ControlPanel />

      <PetDisplay />

      <MoodChart />

    </main>
    // Test merge conflicts

    <MetricsPanel />

    <FooterInfo />

  </div>
</template>