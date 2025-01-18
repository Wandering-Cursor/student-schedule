<script setup lang="ts">
import GroupItem from '@/components/groups/GroupItem.vue'

import { onMounted, reactive, ref, type Reactive, type Ref } from 'vue'
import { getGroups } from '@/api/group'
import type { Components } from '@/api/openapi'
import SpecialtySelector from '@/components/specialty/SpecialtySelector.vue'
import { Panel } from 'primevue'

const firstItem = ref(0)
const page = ref(1)
const loading = ref(false)

const groupData: Ref<Components.Schemas.PaginatedGroupList> = ref({
  count: 0,
  next: null,
  previous: null,
  results: [],
})

const filters: Reactive<{ name?: string; specialty?: string }> = reactive({
  name: undefined,
  specialty: undefined,
})

const loadGroupData = async () => {
  loading.value = true
  try {
    const response = await getGroups({ page: page.value, ...filters })
    groupData.value = response.data
    firstItem.value = page.value * 10 - 10
  } catch (error) {
    if (page.value != 1) {
      page.value = 1
      console.debug('Error loading page, retrying with page 1')
      return loadGroupData()
    }
    throw error
  }
  loading.value = false
}

const loadPageData = async () => {
  await loadGroupData()
}
onMounted(loadPageData)
</script>

<template>
  <main class="contained-wrapper">
    <Panel :header="$t('groups.title')">
      <p>{{ $t('groups.description') }}</p>
    </Panel>
    <Panel :header="$t('labels.filters')" toggleable :collapsed="true">
      <div class="filter-panel">
        <InputGroup>
          <InputText :placeholder="$t('groups.filterBy.name')" v-model="filters.name" />
        </InputGroup>
        <InputGroup>
          <SpecialtySelector
            @update:model-value="
              (event) => {
                if (event.value === null) {
                  filters.specialty = undefined
                  return
                }
                filters.specialty = event.value.uuid
              }
            "
          />
        </InputGroup>
        <Button :label="$t('labels.applyFilters')" @click="loadGroupData" :disabled="loading" />
      </div>
    </Panel>
    <Panel>
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
        @page="
          (event) => {
            page = event.page + 1
            loadGroupData()
          }
        "
        :first="firstItem"
      />
    </Panel>
  </main>
</template>
