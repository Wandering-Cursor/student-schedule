<script setup lang="ts">
import type { Components } from '@/api/openapi'
import type { PropType } from 'vue'
import { defineProps, onMounted, ref } from 'vue'
import { getLocalDateFromString } from '@/utils/datetime'
import Variant from '@/enums/Variant'
import { getLastPart } from '@/utils/urls'
import AnyLink from '@/components/common/AnyLink.vue'
import GroupScheduleItem from '@/components/schedule/GroupScheduleItem.vue'
import type { VirtualScrollerLazyEvent } from 'primevue'

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
            <GroupScheduleItem :schedule="item" v-for="item in schedule.group_schedules" />
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
  width: 100%;
  min-height: 10rem;
  max-height: 15rem;
  overflow-y: scroll;
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
