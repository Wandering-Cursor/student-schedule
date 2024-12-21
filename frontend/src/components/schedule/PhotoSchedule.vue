<script setup lang="ts">
import type { Components } from '@/api/openapi'
import { getPhotoSchedule } from '@/api/schedule'
import { onMounted, ref } from 'vue'

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
    class="photos-content"
    :header="photoScheduleInfo.name || $t('photoSchedule.noName')"
  >
    <div v-if="photoScheduleInfo.photos">
      <Galleria
        :value="photoScheduleInfo.photos"
        :numVisible="5"
        :showThumbnails="false"
        :showIndicators="true"
        :showItemNavigators="true"
      >
        <template #item="slotProps">
          <img :src="slotProps.item.file" :alt="slotProps.item.alt" style="width: 100%" />
        </template>
      </Galleria>
    </div>
    <div v-else>
      <p>{{ $t('photoSchedule.noPhotos') }}</p>
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
