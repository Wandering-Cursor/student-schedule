<script setup lang="ts">
import { getGroup } from '@/api/group'
import type { Components } from '@/api/openapi'
import SpecialtyLink from '@/components/specialty/SpecialtyLink.vue'
import Variant from '@/enums/Variant'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import CombinedScheduleItem from '@/components/schedule/CombinedScheduleItem.vue'
import { getWeekScheduleForGroupList } from '@/api/schedule'

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
    <Panel v-if="!loading && groupEntity != null">
      <template #header>
        <h1>{{ groupEntity.name }}</h1>
      </template>
      <template #default>
        <SpecialtyLink
          :specialty-i-d="groupEntity.specialty.uuid"
          :specialty-name="groupEntity.specialty.name"
          :variant="Variant.P"
        />
      </template>
    </Panel>
    <Skeleton v-if="loading" width="100%" height="50vh" />
    <DataView
      v-if="!loading && weekSchedule != null"
      :value="weekSchedule.results"
      data-key="uuid"
      :rows="10"
    >
      <template #list="slotProps">
        <div v-for="item in slotProps.items">
          <CombinedScheduleItem :schedule="item" />
          <Divider />
        </div>
      </template>
    </DataView>
  </main>
</template>
