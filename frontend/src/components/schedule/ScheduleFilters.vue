<script setup lang="ts">
import { defineProps, defineEmits, type PropType } from 'vue'

interface Filters {
  forDate: Date | undefined
  dateFrom: Date | undefined
  dateTo: Date | undefined
}

const emit = defineEmits(['update:filters'])

const props = defineProps({
  filters: {
    type: Object as PropType<Filters>,
    required: true,
  },
  collapsed: {
    type: Boolean,
    default: true,
  },
  toggleable: {
    Boolean,
    default: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const applyFilters = () => {
  emit('update:filters', props.filters)
}
</script>

<template>
  <Panel :header="$t('labels.filters')" :toggleable :collapsed>
    <div class="filter-panel">
      <FloatLabel variant="on" class="input-field">
        <DatePicker v-model="filters.forDate" id="for-date-input" showButtonBar />
        <label for="for-date-input">{{ $t('schedule.filters.forDate') }}</label>
      </FloatLabel>
      <FloatLabel variant="on" class="input-field">
        <DatePicker v-model="filters.dateFrom" id="from-date-input" showButtonBar />
        <label for="from-date-input">{{ $t('schedule.filters.fromDate') }}</label>
      </FloatLabel>
      <FloatLabel variant="on" class="input-field">
        <DatePicker v-model="filters.dateTo" id="to-date-input" showButtonBar />
        <label for="to-date-input">{{ $t('schedule.filters.toDate') }}</label>
      </FloatLabel>
      <Button :label="$t('labels.applyFilters')" @click="applyFilters" :disabled="loading" />
    </div>
  </Panel>
</template>

<style scoped>
.filter-panel {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.input-field {
  display: flex;
  flex-direction: column;
}
</style>
