<script setup lang="ts">
import type { Components } from '@/api/openapi'
import { getSchedule } from '@/api/schedule'
import { onMounted, reactive, ref, type Ref } from 'vue'
import CombinedScheduleItem from '@/components/schedule/CombinedScheduleItem.vue'

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
    const response = await getSchedule(filters)
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
  <main>
    <Panel :header="$t('schedule.combined')">
      <Skeleton v-if="loading" width="100%" height="50vh" />
      <Panel v-if="!loading" :header="$t('labels.filters')" toggleable :collapsed="true">
        <div class="filter-panel">
          <FloatLabel variant="on" class="flex">
            <DatePicker v-model="filters.forDate" id="for-date-input" showButtonBar />
            <label for="for-date-input">{{ $t('schedule.filters.forDate') }}</label>
          </FloatLabel>
          <FloatLabel variant="on" class="flex">
            <DatePicker v-model="filters.dateFrom" id="from-date-input" showButtonBar />
            <label for="from-date-input">{{ $t('schedule.filters.fromDate') }}</label>
          </FloatLabel>
          <FloatLabel variant="on" class="flex">
            <DatePicker v-model="filters.dateTo" id="to-date-input" showButtonBar />
            <label for="to-date-input">{{ $t('schedule.filters.toDate') }}</label>
          </FloatLabel>
          <Button
            :label="$t('labels.applyFilters')"
            @click="loadScheduleData"
            :disabled="loading"
          />
        </div>
      </Panel>
      <DataView v-if="!loading" :value="data" data-key="uuid" :rows="10">
        <template #list="slotProps">
          <div v-for="item in slotProps.items">
            <CombinedScheduleItem :schedule="item" />
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

<style scoped>
.filter-panel {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.flex {
  display: flex;
  flex-direction: column;
}
</style>
