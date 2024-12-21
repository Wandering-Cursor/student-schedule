<script setup lang="ts">
import type { Components } from '@/api/openapi'
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import { getLocalDateFromString } from '@/utils/datetime'

const props = defineProps({
  schedule: {
    type: Object as PropType<Components.Schemas.Schedule>,
    required: true,
  },
})

const getLastPart = (url: string) => {
  if (url.endsWith('/')) {
    url = url.slice(0, -1)
  }
  const parts = url.split('/')
  return parts[parts.length - 1]
}
</script>

<template>
  <Card>
    <template #title>
      {{ getLocalDateFromString(schedule.for_date) }}
    </template>
    <template #content>
      <RouterLink
        :to="`/schedule/photo/${getLastPart(schedule.photo_schedules)}`"
        v-if="schedule.photo_schedules"
      >
        <h3>{{ $t('schedule.photo') }}</h3>
      </RouterLink>
      <div class="group-schedule" v-if="schedule.group_schedules">
        {{ $t('schedule.group') }}
        <div class="group-schedule-container">
          <Card v-for="item in schedule.group_schedules" :key="schedule.uuid">
            <template #title>
              {{ item.group.name }}
            </template>
            <template #content>
              <Button
                as="router-link"
                :label="$t('schedule.view')"
                :to="`/schedule/group/${item.uuid}`"
              />
            </template>
          </Card>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.group-schedule-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
</style>
