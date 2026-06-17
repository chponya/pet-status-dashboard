<script setup lang="ts">
import SliderControl from './SliderControl.vue'

import { usePetStore } from '../../stores/pet.store'

const pet = usePetStore()
</script>

<template>

  <div class="card">

    <SliderControl
      title="Hunger"
      v-model="pet.hunger"
    />

    <SliderControl
      title="Sleep"
      v-model="pet.sleep"
    />

    <SliderControl
      title="Fun"
      v-model="pet.fun"
    />

    <SliderControl
      title="Cleanliness"
      v-model="pet.cleanliness"
    />

    <SliderControl
      title="Social"
      v-model="pet.social"
    />

  </div>

</template>