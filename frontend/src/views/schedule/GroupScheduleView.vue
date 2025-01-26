<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import GroupSchedule from '@/components/schedule/group/GroupSchedule.vue'

const isLoading = ref(true)
const route = useRoute()

const onLoading = () => {
  isLoading.value = true
}
const onLoaded = () => {
  isLoading.value = false
}
</script>

<template>
  <main class="contained-wrapper">
    <Panel :header="$t('schedule.group.title')">
      {{ $t('schedule.group.description') }}
    </Panel>
    <Skeleton v-if="isLoading" width="100%" height="50vh" />
    <GroupSchedule :groupScheduleID="route.params.id as string" :onLoading :onLoaded />
  </main>
</template>
