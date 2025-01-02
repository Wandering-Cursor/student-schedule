<script setup lang="ts">
import type { Components } from '@/api/openapi'
import type { PropType } from 'vue'
import { getLocalizedDateTime } from '@/utils/datetime'
import InfoTagsList from '@/components/info/InfoTagsList.vue'

const props = defineProps({
  infoPage: {
    type: Object as PropType<Components.Schemas.InfoPage>,
    required: true,
  },
})
</script>

<template>
  <Card>
    <template #title>
      <div class="contained-wrapper">
        {{ infoPage.title }}
        <InfoTagsList :tags="infoPage.tags" />
      </div>
    </template>
    <template #subtitle>
      <pre>{{ infoPage.content.slice(0, 25).concat('...') }}</pre>
    </template>
    <template #content>
      <Button as="router-link" :to="{ name: 'info-detail', params: { id: infoPage.uuid } }">
        {{ $t('labels.view') }}
      </Button>
    </template>
    <template #footer>
      {{ getLocalizedDateTime(infoPage.created_at) }}
    </template>
  </Card>
</template>
