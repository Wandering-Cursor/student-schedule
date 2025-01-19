<script setup lang="ts">
import type { Components } from '@/api/openapi'
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import { getLocalDateFromString } from '@/utils/datetime'
import { getLastPart } from '@/utils/urls'
import GroupScheduleItem from '@/components/schedule/GroupScheduleItem.vue'
import PhotoSchedule from './PhotoSchedule.vue'
import { useUserStore } from '@/stores/login'

const user = useUserStore()
const userGroup = user.getGroup()

const props = defineProps({
  schedule: {
    type: Object as PropType<Components.Schemas.Schedule>,
    required: true,
  },
})

// Show user's group first
if (userGroup) {
  props.schedule.group_schedules.sort((a, b) => {
    if (a.group.uuid === userGroup.uuid) return -1
    if (b.group.uuid === userGroup.uuid) return 1
    return 0
  })
}
</script>

<template>
  <main class="contained-wrapper">
    <Panel :header="getLocalDateFromString(schedule.for_date)">
      {{ $t('schedule.group.count', { count: schedule.group_schedules.length }) }}
    </Panel>
    <PhotoSchedule
      v-if="schedule.photo_schedule"
      :photoScheduleID="getLastPart(schedule.photo_schedule)"
      :onLoading="() => {}"
      :onLoaded="() => {}"
    />
    <Panel :header="$t('schedule.group.titlePlural')">
      <div class="group-schedule-container">
        <GroupScheduleItem
          v-for="groupSchedule in schedule.group_schedules"
          :key="groupSchedule.uuid"
          :schedule="groupSchedule"
          class="group-schedule"
        />
      </div>
    </Panel>
  </main>
</template>

<style scoped>
.group-schedule-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
}

@media (max-width: 600px) {
  .group-schedule-container {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
  }
}
.group-schedule {
  width: 100%;
}
.schedule-item {
  align-items: start;
}
</style>
