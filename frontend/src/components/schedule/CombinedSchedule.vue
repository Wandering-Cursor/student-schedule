<script setup lang="ts">
import type { Components } from '@/api/openapi'
import { getSchedule } from '@/api/schedule'
import { onMounted, reactive, ref, type Ref } from 'vue'
import CombinedScheduleItem from '@/components/schedule/CombinedScheduleItem.vue'

const loading = ref(true)
const data: Ref<Components.Schemas.Schedule[] | undefined> = ref()
const filters = reactive({
  page: 1,
  forDate: undefined,
  dateTo: undefined,
  dateFrom: undefined,
})

onMounted(async () => {
  const schedule = await getSchedule(filters)
  data.value = schedule.data.results
  loading.value = false
})
</script>

<template>
  <main>
    <Panel :header="$t('schedule.combined')">
      <Skeleton v-if="loading" width="100%" height="50vh" />
      <DataView v-if="!loading" :value="data" data-key="uuid" paginator :rows="5">
        <template #list="slotProps">
          <div class="p-grid grid-cols-12 gap-4">
            <div v-for="item in slotProps.items">
              <CombinedScheduleItem :schedule="item" />
              <Divider />
            </div>
          </div>
        </template>
      </DataView>
    </Panel>
  </main>
</template>
