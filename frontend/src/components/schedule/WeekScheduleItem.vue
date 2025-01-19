<script setup lang="ts">
import type { Components } from '@/api/openapi'
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import { getLocalDateFromString, getLocalDayOfWeek } from '@/utils/datetime'
import Variant from '@/enums/Variant'
import { getLastPart } from '@/utils/urls'
import AnyLink from '@/components/common/AnyLink.vue'
import { useUserStore } from '@/stores/login'
import GroupLessonList from '@/components/schedule/group/GroupLessonList.vue'

const props = defineProps({
  schedule: {
    type: Object as PropType<Components.Schemas.Schedule>,
    required: true,
  },
})

const user = useUserStore()

const scheduleName = (schedule: Components.Schemas.Schedule) => {
  return `${getLocalDateFromString(schedule.for_date)} - ${schedule.for_date ? getLocalDayOfWeek(schedule.for_date) : ''}`
}

const userGroupIncludedText = () => {
  const group = user.getGroup()
  if (!group) {
    return ''
  }

  if (
    props.schedule.group_schedules.some((groupSchedule) => groupSchedule.group.uuid === group.uuid)
  ) {
    return 'schedule.group.userGroupIncluded'
  }

  return ''
}
</script>

<template>
  <Card>
    <template #title> {{ scheduleName(schedule) }}</template>
    <template #subtitle v-if="schedule.group_schedules.length > 0">
      {{ $t('schedule.group.count', { count: schedule.group_schedules.length }) }}
      <br />
      {{ $t(userGroupIncludedText()) }}
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
        <GroupLessonList :group-schedule-i-d="schedule.group_schedules[0].uuid" />
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
