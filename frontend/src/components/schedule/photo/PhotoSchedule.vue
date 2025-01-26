<script setup lang="ts">
import type { Components } from '@/api/openapi'
import { getPhotoSchedule } from '@/api/schedule'
import { onMounted, ref } from 'vue'
import PhotoGalleria from './PhotoGalleria.vue'

const photoScheduleInfo = ref<Components.Schemas.PhotoSchedule>()

async function fetchPhotoSchedule() {
  props.onLoading()
  if (props.photoScheduleID) {
    const response = await getPhotoSchedule({ id: props.photoScheduleID })
    photoScheduleInfo.value = response.data
    props.onLoaded()
  }
}

const props = defineProps<{
  photoScheduleID: string
  onLoading: Function
  onLoaded: Function
}>()

onMounted(() => {
  fetchPhotoSchedule()
})
</script>

<template>
  <Panel
    v-if="photoScheduleInfo"
    :header="photoScheduleInfo.name || $t('labels.noName')"
    :pt="{
      contentContainer: { class: 'photos-content' },
    }"
  >
    <div v-if="photoScheduleInfo.photos">
      <PhotoGalleria :photos="photoScheduleInfo.photos" />
    </div>
    <div v-else>
      <p>{{ $t('schedule.photo.noPhotos') }}</p>
    </div>
  </Panel>
</template>

<style scoped>
.photos-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
