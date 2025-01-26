<script setup lang="ts">
import { getGroup } from '@/api/group'
import type { Components } from '@/api/openapi'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getWeekScheduleForGroupList } from '@/api/schedule'
import GroupInfoPanel from '@/components/groups/GroupInfoPanel.vue'
import WeekScheduleDataView from '@/components/schedule/week/WeekScheduleDataView.vue'

const route = useRoute()

const loading = ref(true)

const groupID = route.params.id as string
const groupEntity = ref<Components.Schemas.Group | null>(null)
const weekSchedule = ref<Components.Schemas.PaginatedWeekScheduleForGroupList | null>(null)

onMounted(async () => {
  loading.value = true
  const response = await getGroup({ uuid: groupID })
  groupEntity.value = response.data
  const weekScheduleResponse = await getWeekScheduleForGroupList({ group: groupID })
  weekSchedule.value = weekScheduleResponse.data
  loading.value = false
})
</script>

<template>
  <main class="contained-wrapper">
    <GroupInfoPanel v-if="!loading && groupEntity != null" :groupEntity />
    <Skeleton v-if="loading" width="100%" height="50vh" />
    <WeekScheduleDataView v-if="!loading && weekSchedule != null" :weekSchedule />
  </main>
</template>
