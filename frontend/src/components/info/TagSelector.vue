<script setup lang="ts">
import type { Components } from '@/api/openapi'
import { getTags } from '@/api/tag'
import type { MultiSelectChangeEvent } from 'primevue'
import { defineProps, defineEmits, ref, type Ref, onMounted } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: String,
    required: false,
  },
})
const loading = ref(false)

const emitChange = (value: MultiSelectChangeEvent) => {
  emit('update:modelValue', value)
}

const options: Ref<Components.Schemas.Tag[]> = ref([])
const searchInput = ref('')

const search = async () => {
  loading.value = true
  const response = await getTags({ name: searchInput.value, page: 1 })
  options.value = response.data.results
  loading.value = false
}

onMounted(search)
</script>

<template>
  <MultiSelect
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :options="options"
    :optionLabel="(option) => option.name"
    @change="emitChange"
    :placeholder="$t('info.filterBy.tags')"
    filter
    @filter="
      (event) => {
        searchInput = event.value
        search()
      }
    "
    :loading
    :showClear="true"
  />
</template>
