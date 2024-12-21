<script setup lang="ts">
import type { Components } from '@/api/openapi'
import { getGroupSchedule } from '@/api/schedule'
import { onMounted, ref } from 'vue'

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
  <Panel v-if="groupScheduleInfo" class="photos-content" :header="groupScheduleInfo.group">
    Test
  </Panel>
</template>
