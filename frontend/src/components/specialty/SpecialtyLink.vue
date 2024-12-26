<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import Variant from '@/enums/Variant'
import AnyLink from '@/components/common/AnyLink.vue'

const props = defineProps({
  specialtyID: {
    type: String,
    required: true,
  },
  specialtyName: {
    type: String,
    required: true,
  },
  variant: {
    type: String as PropType<Variant>,
    default: Variant.H1,
  },
  useLink: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <AnyLink
    :id-field="specialtyID"
    :name-field="$t('specialty.formatted', { name: specialtyName })"
    link-to="specialty-detail"
    :variant
    :useLink
  />
</template>
