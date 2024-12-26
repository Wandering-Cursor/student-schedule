<script setup lang="ts">
import { getGroup } from '@/api/group'
import type { Components } from '@/api/openapi'
import SpecialtyLink from '@/components/specialty/SpecialtyLink.vue'
import Variant from '@/enums/Variant'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const groupID = route.params.id as string
const groupEntity = ref<Components.Schemas.Group>()

onMounted(async () => {
  const response = await getGroup({ uuid: groupID })
  groupEntity.value = response.data
})
</script>

<template>
  <main>
    <Panel v-if="groupEntity">
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
    <Skeleton v-else width="100%" height="50vh" />
  </main>
</template>
