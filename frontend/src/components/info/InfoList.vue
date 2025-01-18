<script setup lang="ts">
import type { Components } from '@/api/openapi'
import { onMounted, reactive, ref, type Reactive, type Ref } from 'vue'
import InfoItem from '@/components/info/InfoItem.vue'
import { getInfoPages } from '@/api/info'
import { useToast, type MultiSelectChangeEvent } from 'primevue'
import TagSelector from '@/components/info/TagSelector.vue'

const toast = useToast()

const loading = ref(false)
const first = ref(0)
const infoData: Ref<Components.Schemas.PaginatedInfoPageList> = ref({
  count: 0,
  next: null,
  previous: null,
  results: [],
})

const filters: Reactive<{ page: number; title: string | undefined; tags: string[] | undefined }> =
  reactive({
    page: 1,
    title: undefined,
    tags: undefined,
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
  <div class="contained-wrapper" :class="{ hidden: loading }">
    <Panel :header="$t('labels.filters')" toggleable :collapsed="true">
      <div class="filter-panel">
        <InputGroup>
          <InputText :placeholder="$t('info.filterBy.title')" v-model="filters.title" />
        </InputGroup>
        <InputGroup>
          <TagSelector
            @update:model-value="
              (event: MultiSelectChangeEvent) => {
                if (event.value === null) {
                  filters.tags = []
                  return
                }

                filters.tags = (event.value as Components.Schemas.Tag[]).map((tag) => tag.uuid)
              }
            "
          />
        </InputGroup>
        <Button :label="$t('labels.applyFilters')" @click="loadInfo" :disabled="loading" />
      </div>
    </Panel>
    <Panel>
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
  </div>
</template>

<style scoped>
.hidden {
  display: none;
}
</style>
