<script setup lang="ts">
import CombinedSchedule from '@/components/schedule/CombinedSchedule.vue'
</script>

<template>
  <main>
    <Panel :header="$t('schedule.title')">
      {{$t('schedule.description')}}
    </Panel>
    <CombinedSchedule/>
  </main>
</template>
