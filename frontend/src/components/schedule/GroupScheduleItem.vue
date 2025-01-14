<script setup lang="ts">
import type { Components } from '@/api/openapi'
import Variant from '@/enums/Variant'
import type { PropType } from 'vue'

const props = defineProps({
  schedule: {
    type: Object as PropType<Components.Schemas.ShortGroupScheduleInfo>,
    required: true,
  },
})
</script>
<template>
  <Card>
    <template #content>
      <GroupLink
        :group-i-d="schedule.group.uuid"
        :group-name="schedule.group.name"
        :variant="Variant.P"
        class="group-schedule-item-content"
      />
    </template>
    <template #footer>
      <Button
        as="router-link"
        :label="$t('labels.view')"
        :to="`/schedule/group/${schedule.uuid}`"
        class="group-schedule-item-content"
      />
    </template>
  </Card>
</template>

<style scoped>
.group-schedule-item-content {
  width: 100%;
}
</style>
