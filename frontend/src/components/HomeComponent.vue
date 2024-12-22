<script setup lang="ts">
import { getGroups } from '@/api/group'
import type { Components } from '@/api/openapi'
import { onMounted, ref, type Ref } from 'vue'

const groups: Ref<Components.Schemas.Group[]> = ref([])

onMounted(async () => {
  groups.value = (await getGroups(null)).data.results
})
</script>

<template>
  <Panel :header="$t('home.welcome')">
    {{ $t('home.description') }}
  </Panel>
</template>
