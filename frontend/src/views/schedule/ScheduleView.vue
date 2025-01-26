<script setup lang="ts">
import CombinedSchedule from '@/components/schedule/combined/CombinedSchedule.vue'
</script>

<template>
  <main class="contained-wrapper">
    <Panel :header="$t('schedule.title')">
      {{ $t('schedule.description') }}
    </Panel>
    <CombinedSchedule />
  </main>
</template>
