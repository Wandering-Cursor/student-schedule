<script setup lang="ts">
import type { Components } from '@/api/openapi'
import type { PropType } from 'vue'
import { defineProps, onMounted, ref } from 'vue'
import { getLocalDateFromString } from '@/utils/datetime'
import Variant from '@/enums/Variant'
import { getLastPart } from '@/utils/urls'
import AnyLink from '@/components/common/AnyLink.vue'

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
        <p v-if="schedule.group_schedules.length > 0">
          {{ $t('schedule.group.count', { count: schedule.group_schedules.length }) }}
        </p>
        <AnyLink
          :id-field="schedule.uuid"
          :name-field="$t('labels.view')"
          linkTo="schedule-detail"
          :variant="Variant.H4"
          :useLink="false"
          class="schedule-link"
        />
      </div>
    </template>
  </Card>
</template>

<style scoped>
.schedule-item {
  align-items: start;
}
.schedule-link {
  padding: 0.5em 0.5em;
}
</style>
