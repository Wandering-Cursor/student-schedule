<script setup lang="ts">
import type { Components } from '@/api/openapi'
import Variant from '@/enums/Variant'
import type { PropType } from 'vue'

const props = defineProps({
  groupEntity: {
    type: Object as PropType<Components.Schemas.Group>,
    required: true,
  },
})
</script>

<template>
  <Panel>
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
</template>
