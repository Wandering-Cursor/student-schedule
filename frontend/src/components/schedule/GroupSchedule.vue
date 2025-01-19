<script setup lang="ts">
import type { Components } from '@/api/openapi'
import { getGroupSchedule } from '@/api/schedule'
import { onMounted, ref } from 'vue'
import { getLocalDateFromString } from '@/utils/datetime'
import GroupLink from '@/components/groups/GroupLink.vue'
import Variant from '@/enums/Variant'
import GroupLessonList from '@/components/schedule/group/GroupLessonList.vue'

const groupScheduleInfo = ref<Components.Schemas.GroupSchedule>()

async function fetchGroupSchedule() {
  props.onLoading()
  if (props.groupScheduleID) {
    const response = await getGroupSchedule({ id: props.groupScheduleID })
    groupScheduleInfo.value = response.data
    props.onLoaded()
  }
}

const props = defineProps<{
  groupScheduleID: string
  onLoading: Function
  onLoaded: Function
}>()

onMounted(() => {
  fetchGroupSchedule()
})
</script>

<template>
  <Panel v-if="groupScheduleInfo" class="schedule-content">
    <template #default>
      <GroupLink
        :group-i-d="groupScheduleInfo.group.uuid"
        :group-name="groupScheduleInfo.group.name"
        :variant="Variant.H1"
      />
      <p>
        {{
          $t('schedule.group.forDate', { date: getLocalDateFromString(groupScheduleInfo.for_date) })
        }}
      </p>
      <p>{{ $t('schedule.group.pairsList') }}</p>
      <GroupLessonList :groupSchedule="groupScheduleInfo" />
    </template>
  </Panel>
</template>
