<script setup lang="ts">
import { getSpecialty } from '@/api/specialty'
import type { Components } from '@/api/openapi'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import GroupLink from '@/components/groups/GroupLink.vue'

const route = useRoute()

const groupID = route.params.id as string
const specialtyEntity = ref<Components.Schemas.Specialty>()

onMounted(async () => {
  const response = await getSpecialty({ uuid: groupID })
  specialtyEntity.value = response.data
})
</script>

<template>
  <main class="contained-wrapper">
    <Panel v-if="specialtyEntity">
      <template #header>
        <h1>{{ specialtyEntity.name }}</h1>
      </template>
      <template #default>
        <p>{{ $t('specialty.formatted', { name: specialtyEntity.full_name }) }}</p>
        <p>{{ $t('groups.list') }}</p>
        <DataView data-key="uuid" :value="specialtyEntity.groups" paginator :rows="10">
          <template #list="slotProps">
            <div class="contained-wrapper">
              <GroupLink
                :group-i-d="value.uuid"
                :groupName="value.name"
                v-for="value in slotProps.items"
                v-bind:key="value.uuid"
              />
            </div>
          </template>
        </DataView>
      </template>
    </Panel>
    <Skeleton v-else width="100%" height="50vh" />
  </main>
</template>
