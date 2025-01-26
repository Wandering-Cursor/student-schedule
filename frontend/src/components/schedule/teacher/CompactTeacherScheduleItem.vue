<script setup lang="ts">
import type { Components } from '@/api/openapi'
import { getLocalDateFromString, getLocalDayOfWeek } from '@/utils/datetime'
import type { PropType } from 'vue'
import { getLastPart } from '@/utils/urls'
import AnyLink from '@/components/common/AnyLink.vue'
import Variant from '@/enums/Variant'

const props = defineProps({
  schedule: {
    type: Object as PropType<Components.Schemas.TeacherSchedule>,
    required: true,
  },
})

const scheduleName = () => {
  const forDate = props.schedule.for_date
  return `${getLocalDateFromString(forDate)} - ${getLocalDayOfWeek(forDate ? forDate : '')}`
}

function availableTypes() {
  const scheduleTypes = []
  if ((props.schedule.schedule?.teachers ?? []).length > 0) {
    scheduleTypes.push('generated')
  }
  if (props.schedule.photos.length > 0) {
    scheduleTypes.push('photo')
  }
  return scheduleTypes
}
</script>

<template>
  <Card>
    <template #title>{{ scheduleName() }}</template>
    <template #subtitle
      ><p v-for="type in availableTypes()">
        {{ $t(`schedule.teacher.types.${type}`) }}
      </p></template
    >
    <template #content>
      <div class="contained-wrapper">
        <AnyLink
          :id-field="schedule.uuid"
          :name-field="$t('labels.view')"
          link-to="teacher-schedule-detail"
          :variant="Variant.H2"
          :use-link="false"
        ></AnyLink>
        <AnyLink
          v-if="schedule.student_schedule"
          :id-field="getLastPart(schedule.student_schedule)"
          :name-field="$t('schedule.combined')"
          linkTo="schedule-detail"
          :variant="Variant.H4"
          :useLink="false"
        />
      </div>
    </template>
  </Card>
</template>
