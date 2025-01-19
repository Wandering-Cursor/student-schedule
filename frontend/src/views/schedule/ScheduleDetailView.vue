<script setup lang="tsx">
import type { Components } from '@/api/openapi'
import { getSchedule } from '@/api/schedule'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import CombinedScheduleItem from '@/components/schedule/CombinedScheduleItem.vue'

const route = useRoute()

const id = route.params.id as string

const schedule: Ref<Components.Schemas.Schedule | undefined> = ref()

onMounted(async () => {
  schedule.value = (await getSchedule({ id })).data
})
</script>

<template>
  <CombinedScheduleItem v-if="schedule" :schedule />
  <Skeleton v-else width="100%" height="50vh" />
</template>
