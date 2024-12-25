<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import PhotoSchedule from '@/components/schedule/PhotoSchedule.vue'

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
    <Panel :header="$t('photoSchedule.title')">
      {{ $t('photoSchedule.description') }}
    </Panel>
    <Skeleton v-if="isLoading" width="100%" height="50vh" />
    <PhotoSchedule :photoScheduleID="route.params.id as string" :onLoading :onLoaded />
  </main>
</template>

<style scoped>
.photos-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
