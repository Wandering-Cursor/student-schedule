<script setup lang="ts">
import type { Components } from '@/api/openapi'
import { getGroupSchedule } from '@/api/schedule'
import { onMounted, ref, type PropType } from 'vue'

const gotSchedule = ref(false)
const groupScheduleInfo = ref<Components.Schemas.GroupSchedule>()

const props = defineProps({
  groupSchedule: {
    type: Object as PropType<Components.Schemas.GroupSchedule>,
    required: false,
  },
  groupScheduleID: {
    type: String,
    required: false,
  },
})

onMounted(async () => {
  if (props.groupScheduleID) {
    const response = await getGroupSchedule({ id: props.groupScheduleID })
    groupScheduleInfo.value = response.data
    console.log(groupScheduleInfo.value)
  }
  if (props.groupSchedule) {
    groupScheduleInfo.value = props.groupSchedule
  }
  gotSchedule.value = true
})
</script>

<template>
  <div v-if="!gotSchedule">
    {{ $t('schedule.group.count', { count: 0 }) }}
  </div>
  <Card v-else v-for="pair in groupScheduleInfo?.lessons" :key="pair.uuid" class="full-width">
    <template #title> {{ pair.pair.name }} - {{ pair.name }} </template>
    <template #subtitle> {{ pair.pair.start_time }} - {{ pair.pair.end_time }} </template>
    <template #content>
      <p>{{ $t('schedule.teacherName') }}: {{ pair.teacher.name }}</p>
    </template>
    <template #footer> {{ $t('schedule.room') }}: {{ pair.room }} </template>
  </Card>
  <Divider />
</template>
