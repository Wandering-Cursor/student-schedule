<script setup lang="ts">
import type { Components } from '@/api/openapi'
import type { PropType } from 'vue'

const props = defineProps({
  photos: {
    type: Array as PropType<Components.Schemas.PhotoSchedulePhoto[]>,
    required: true,
  },
})
</script>
<template>
  <Galleria
    :value="photos"
    :numVisible="3"
    :showThumbnails="false"
    :showIndicators="true"
    :showItemNavigators="true"
  >
    <template #item="slotProps: { item: Components.Schemas.PhotoSchedulePhoto }">
      <a :href="slotProps.item.file" target="_blank">
        <img :src="slotProps.item.file" class="image" />
      </a>
    </template>
  </Galleria>
</template>

<style scoped>
.image {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}
</style>
