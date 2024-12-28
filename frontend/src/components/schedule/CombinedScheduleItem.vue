<script setup lang="ts">
import type { Components } from '@/api/openapi'
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import { getLocalDateFromString } from '@/utils/datetime'
import GroupLink from '@/components/groups/GroupLink.vue'
import Variant from '@/enums/Variant'
import { getLastPart } from '@/utils/urls'

const props = defineProps({
  schedule: {
    type: Object as PropType<Components.Schemas.Schedule>,
    required: true,
  },
})
</script>

<template>
  <Card>
    <template #title>
      {{ getLocalDateFromString(schedule.for_date) }}
    </template>
    <template #content>
      <RouterLink
        :to="`/schedule/photo/${getLastPart(schedule.photo_schedule)}`"
        v-if="schedule.photo_schedule"
      >
        <h3>{{ $t('schedule.photo') }}</h3>
      </RouterLink>
      <div class="group-schedule" v-if="schedule.group_schedules">
        {{ $t('schedule.group') }}
        <div class="group-schedule-container">
          <Card v-for="item in schedule.group_schedules" :key="schedule.uuid">
            <template #content>
              <GroupLink
                :group-i-d="item.group.uuid"
                :group-name="item.group.name"
                :variant="Variant.P"
                class="group-schedule-item-content"
              />
            </template>
            <template #footer>
              <Button
                as="router-link"
                :label="$t('schedule.view')"
                :to="`/schedule/group/${item.uuid}`"
                class="group-schedule-item-content"
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
.group-schedule-item-content {
  width: 100%;
}
</style>
