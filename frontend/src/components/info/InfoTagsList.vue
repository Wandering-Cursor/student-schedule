<script setup lang="ts">
import type { Components } from '@/api/openapi'
import type { PropType } from 'vue'

const props = defineProps({
  tags: {
    type: Array as PropType<Components.Schemas.Tag[]>,
    required: true,
  },
})
</script>
<template>
  <div class="contained-wrapper-rows" style="max-width: 100%; overflow-y: scroll">
    <div v-for="tag in tags" display="inline">
      <Tag :style="`color: ${tag.color};`" :value="tag.name" rounded />
    </div>
  </div>
</template>
