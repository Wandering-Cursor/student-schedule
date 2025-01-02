<script setup lang="ts">
import type { Components } from '@/api/openapi'
import { onMounted, reactive, ref, type Ref } from 'vue'
import InfoItem from '@/components/info/InfoItem.vue'
import { getInfoPages } from '@/api/info'
import { useToast } from 'primevue'

const toast = useToast()

const loading = ref(false)
const first = ref(0)
const infoData: Ref<Components.Schemas.PaginatedInfoPageList> = ref({
  count: 0,
  next: null,
  previous: null,
  results: [],
})

const filters = reactive({
  page: 1,
})

async function loadInfo() {
  loading.value = true
  try {
    const response = await getInfoPages(filters)
    infoData.value = response.data
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'labels.error',
      detail: `${error}`,
      life: 5000,
    })
  }
  loading.value = false
}

onMounted(loadInfo)
</script>

<template>
  <Skeleton v-if="loading" height="75vh" width="100%" />
  <Panel v-else>
    <DataView data-key="uuid" :value="infoData.results" :rows="10">
      <template #list="slotProps">
        <div v-for="info in slotProps.items">
          <InfoItem :infoPage="info" />
          <Divider />
        </div>
      </template>
    </DataView>
    <Paginator
      :total-records="infoData.count"
      :rows="10"
      @page="
        (event) => {
          filters.page = event.page + 1
          loadInfo()
        }
      "
      :first
    />
  </Panel>
</template>
