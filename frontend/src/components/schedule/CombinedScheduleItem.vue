<script setup lang="ts">
import type { Components } from '@/api/openapi'
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import { getLocalDateFromString } from '@/utils/datetime'
import GroupLink from '@/components/groups/GroupLink.vue'
import Variant from '@/enums/Variant'
import { getLastPart } from '@/utils/urls'
import AnyLink from '../common/AnyLink.vue'

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
      <div class="contained-wrapper schedule-item">
        <AnyLink
          v-if="schedule.photo_schedule"
          :id-field="getLastPart(schedule.photo_schedule)"
          :name-field="$t('schedule.photo.title')"
          linkTo="photo-schedule"
          :variant="Variant.H3"
        />
        <div class="group-schedule" v-if="schedule.group_schedules.length > 0">
          {{ $t('schedule.group.title') }}
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
                  :label="$t('labels.view')"
                  :to="`/schedule/group/${item.uuid}`"
                  class="group-schedule-item-content"
                />
              </template>
            </Card>
          </div>
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
.group-schedule {
  width: 100%;
}
.schedule-item {
  align-items: start;
}
</style>
