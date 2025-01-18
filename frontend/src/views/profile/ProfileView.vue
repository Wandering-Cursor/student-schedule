<script setup lang="ts">
import { getGroup } from '@/api/group'
import type { Components } from '@/api/openapi'
import { getWeekScheduleForGroupList } from '@/api/schedule'
import GroupInfoPanel from '@/components/groups/GroupInfoPanel.vue'
import { useUserStore } from '@/stores/login'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import WeekScheduleDataView from '@/components/schedule/WeekScheduleDataView.vue'

const userGroupStore = useUserStore()
const router = useRouter()

const loading = ref(true)

const groupEntity = ref<Components.Schemas.Group | null>(null)
const weekSchedule = ref<Components.Schemas.PaginatedWeekScheduleForGroupList | null>(null)

onMounted(async () => {
  if (!userGroupStore.isGroupSet()) {
    router.push('/')
    return
  }

  const groupInfo = userGroupStore.getGroup()
  if (!groupInfo) {
    router.push('/')
    return
  }

  loading.value = true
  const response = await getGroup({ uuid: groupInfo.uuid })
  groupEntity.value = response.data

  const weekScheduleResponse = await getWeekScheduleForGroupList({ group: groupInfo.uuid })
  weekSchedule.value = weekScheduleResponse.data
  loading.value = false
})
</script>

<template>
  <main class="contained-wrapper">
    <GroupInfoPanel v-if="groupEntity" :groupEntity />
    <Skeleton v-else width="100%" height="50vh" />
    <WeekScheduleDataView v-if="!loading && weekSchedule != null" :weekSchedule />
  </main>
</template>
