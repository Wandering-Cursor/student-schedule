<script setup lang="ts">
import type { Components } from '@/api/openapi'
import { getGroupSchedule } from '@/api/schedule'
import { onMounted, ref } from 'vue'
import { getLocalDateFromString } from '@/utils/datetime'
import GroupLink from '@/components/groups/GroupLink.vue'

const groupScheduleInfo = ref<Components.Schemas.GroupSchedule>()

async function fetchPhotoSchedule() {
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
  fetchPhotoSchedule()
})
</script>

<template>
  <Panel v-if="groupScheduleInfo" class="schedule-content">
    <template #default>
      <GroupLink
        :group-i-d="groupScheduleInfo.group.uuid"
        :group-name="groupScheduleInfo.group.name"
        variant="H1"
      />
      <p>
        {{
          $t('groupSchedule.forDate', { date: getLocalDateFromString(groupScheduleInfo.for_date) })
        }}
      </p>
      <p>{{ $t('groupSchedule.pairsList') }}</p>
      <ScrollPanel class="pairs-list">
        <div v-for="pair in groupScheduleInfo.scheduled_pairs" :key="pair.uuid">
          <Card>
            <template #title> {{ pair.pair.name }} - {{ pair.name }} </template>
            <template #subtitle> {{ pair.pair.start_time }} - {{ pair.pair.end_time }} </template>
            <template #content>
              <p>{{ $t('schedule.teacherName') }}: {{ pair.teacher.name }}</p>
            </template>
            <template #footer> {{ $t('schedule.roomName') }}: {{ pair.room }} </template>
          </Card>
          <Divider />
        </div>
      </ScrollPanel>
    </template>
  </Panel>
</template>

<style scoped>
.pairs-list {
  max-height: 50vh;
}
</style>
