<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import GroupLink from '@/components/groups/GroupLink.vue'
import type { Components } from '@/api/openapi'
import SpecialtyLink from '@/components/specialty/SpecialtyLink.vue'
import Variant from '@/enums/Variant'

const props = defineProps({
  group: {
    type: Object as PropType<Components.Schemas.Group>,
    required: true,
  },
})
</script>

<template>
  <Card>
    <template #title>
      <GroupLink :group-i-d="group.uuid" :group-name="group.name" />
    </template>
    <template #footer>
      <SpecialtyLink
        :specialty-i-d="group.specialty.uuid"
        :specialty-name="group.specialty.name"
        :variant="Variant.H3"
      />
    </template>
  </Card>
</template>
