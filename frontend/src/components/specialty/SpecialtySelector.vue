<script setup lang="ts">
import type { Components } from '@/api/openapi'
import { getSpecialties } from '@/api/specialty'
import type { SelectChangeEvent } from 'primevue'
import { defineProps, defineEmits, ref, type Ref, onMounted } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: String,
    required: false,
  },
})
const loading = ref(false)

const emitChange = (value: SelectChangeEvent) => {
  emit('update:modelValue', value)
}

const options: Ref<Components.Schemas.Specialty[]> = ref([])
const searchInput = ref('')

const search = async () => {
  loading.value = true
  const response = await getSpecialties({ name: searchInput.value })
  options.value = response.data.results
  loading.value = false
}

onMounted(search)
</script>

<template>
  <Select
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :options="options"
    :optionLabel="(option) => option.name"
    @change="emitChange"
    :placeholder="$t('specialty.filterBy.entity')"
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
