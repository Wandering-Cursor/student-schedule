<script setup lang="ts">
import type { Components } from '@/api/openapi'
import { getTeachersScheduleList } from '@/api/schedule'
import { onMounted, reactive, ref, type Ref } from 'vue'
import CompactTeacherScheduleItem from '@/components/schedule/teacher/CompactTeacherScheduleItem.vue'

const loading = ref(true)
const firstItem = ref(0)

const filters = reactive({
  page: 1,
  forDate: undefined,
  dateTo: undefined,
  dateFrom: undefined,
})
const teacherSchedule: Ref<Components.Schemas.PaginatedTeacherScheduleList | undefined> = ref()

const loadTeacherSchedule = async () => {
  loading.value = true
  try {
    const response = await getTeachersScheduleList(filters, undefined)
    teacherSchedule.value = response.data
    firstItem.value = filters.page * 10 - 10
  } catch (error) {
    if (filters.page != 1) {
      filters.page = 1
      console.debug('Error loading page, retrying with page 1')
      return loadTeacherSchedule()
    }
    console.error('Error loading teacher schedule', error)
    throw error
  }
  loading.value = false
}

onMounted(loadTeacherSchedule)
</script>
<template>
  <main class="contained-wrapper">
    <Skeleton v-if="loading" width="100%" height="50vh" />
    <ScheduleFilters
      v-else
      :filters="filters"
      :loading="loading"
      @update:filters="loadTeacherSchedule"
    />
    <Panel v-if="!loading">
      <DataView :value="teacherSchedule?.results" data-key="uuid" :rows="10">
        <template #list="slotProps">
          <div v-for="item in slotProps.items">
            <CompactTeacherScheduleItem :schedule="item" />
            <Divider />
          </div>
        </template>
      </DataView>
      <Paginator
        :total-records="teacherSchedule?.count"
        :rows="10"
        @page="
          (event) => {
            filters.page = event.page + 1
            loadTeacherSchedule()
          }
        "
        :first="firstItem"
      />
    </Panel>
  </main>
</template>
