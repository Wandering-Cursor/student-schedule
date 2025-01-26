<script setup lang="ts">
import type { Components } from '@/api/openapi'
import type { PropType } from 'vue'
import WeekScheduleItem from '@/components/schedule/week/WeekScheduleItem.vue'

defineProps({
  weekSchedule: {
    type: Object as PropType<Components.Schemas.PaginatedWeekScheduleForGroupList>,
    required: true,
  },
})
</script>

<template>
  <Panel>
    <DataView :value="weekSchedule.results" data-key="uuid" :rows="10">
      <template #list="slotProps">
        <div v-for="item in slotProps.items">
          <WeekScheduleItem :schedule="item" />
          <Divider />
        </div>
      </template>
    </DataView>
  </Panel>
</template>
