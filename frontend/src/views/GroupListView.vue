<script setup lang="ts">
import GroupItem from '@/components/groups/GroupItem.vue'

import { onMounted, ref, type Ref } from 'vue'
import { getGroups } from '@/api/group'
import type { Components } from '@/api/openapi'

const firstItem = ref(0)
const groupData: Ref<Components.Schemas.PaginatedGroupList> = ref({
  count: 0,
  next: null,
  previous: null,
  results: [],
})

const loadGroupData = async (loadPage: number) => {
  let response = await getGroups({ page: loadPage })
  groupData.value = response.data
  firstItem.value = loadPage * 10 - 10
}

const loadPageData = async () => {
  await loadGroupData(1)
}
onMounted(loadPageData)
</script>

<template>
  <main class="contained-wrapper">
    <Panel></Panel>
    <DataView data-key="uuid" :value="groupData.results" :rows="10">
      <template #list="slotProps">
        <div v-for="item in slotProps.items">
          <GroupItem :group="item" />
          <Divider />
        </div>
      </template>
    </DataView>
    <Paginator
      :total-records="groupData.count"
      :rows="10"
      @page="(event) => loadGroupData(event.page + 1)"
      :first="firstItem"
    />
  </main>
</template>
