<script setup lang="ts">
import type { Components } from '@/api/openapi'
import { getScheduleList } from '@/api/schedule'
import { onMounted, reactive, ref, type Ref } from 'vue'
import ShortCombinedScheduleItem from '@/components/schedule/combined/ShortCombinedScheduleItem.vue'
import ScheduleFilters from '@/components/schedule/ScheduleFilters.vue'

const firstItem = ref(0)
const loading = ref(false)

const data: Ref<Components.Schemas.Schedule[] | undefined> = ref()
const scheduleData: Ref<Components.Schemas.PaginatedScheduleList> = ref({
  count: 0,
  next: null,
  previous: null,
  results: [],
})

const filters = reactive({
  page: 1,
  forDate: undefined,
  dateTo: undefined,
  dateFrom: undefined,
})

const loadScheduleData = async () => {
  loading.value = true
  try {
    const response = await getScheduleList(filters)
    scheduleData.value = response.data
    data.value = response.data.results
    firstItem.value = filters.page * 10 - 10
  } catch (error) {
    if (filters.page != 1) {
      filters.page = 1
      console.debug('Error loading page, retrying with page 1')
      return loadScheduleData()
    }
    throw error
  }
  loading.value = false
}

onMounted(async () => {
  await loadScheduleData()
})
</script>

<template>
  <main class="contained-wrapper">
    <Skeleton v-if="loading" width="100%" height="50vh" />
    <ScheduleFilters
      v-else
      :filters="filters"
      :loading="loading"
      @update:filters="loadScheduleData"
    />
    <Panel>
      <DataView v-if="!loading" :value="data" data-key="uuid" :rows="10">
        <template #list="slotProps">
          <div v-for="item in slotProps.items">
            <ShortCombinedScheduleItem :schedule="item" />
            <Divider />
          </div>
        </template>
      </DataView>
      <Paginator
        :total-records="scheduleData.count"
        :rows="10"
        @page="
          (event) => {
            filters.page = event.page + 1
            loadScheduleData()
          }
        "
        :first="firstItem"
      />
    </Panel>
  </main>
</template>
