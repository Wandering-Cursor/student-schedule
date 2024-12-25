<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import Variant from '@/enums/Variant'

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

const buttonVariant = () => {
  return props.useLink ? 'link' : undefined
}
const buttonClass = () => {
  return props.useLink ? 'link-button' : undefined
}
</script>

<template>
  <Button
    :variant="buttonVariant()"
    as="router-link"
    :to="{ name: 'specialty-detail', params: { id: specialtyID } }"
    :class="buttonClass()"
  >
    <h1 v-if="variant == Variant.H1">{{ $t('specialty.formatted', { name: specialtyName }) }}</h1>
    <h2 v-if="variant == Variant.H2">{{ $t('specialty.formatted', { name: specialtyName }) }}</h2>
    <h3 v-if="variant == Variant.H3">{{ $t('specialty.formatted', { name: specialtyName }) }}</h3>
    <h4 v-if="variant == Variant.H4">{{ $t('specialty.formatted', { name: specialtyName }) }}</h4>
    <h5 v-if="variant == Variant.H5">{{ $t('specialty.formatted', { name: specialtyName }) }}</h5>
    <h6 v-if="variant == Variant.H6">{{ $t('specialty.formatted', { name: specialtyName }) }}</h6>
    <p v-if="variant == Variant.P">{{ $t('specialty.formatted', { name: specialtyName }) }}</p>
  </Button>
</template>

<style scoped>
.link-button {
  padding: 0;
  margin: 0;
}
.link-button h1,
.link-button h2,
.link-button h3,
.link-button h4,
.link-button h5,
.link-button h6,
.link-button p {
  margin-top: 0;
}
</style>
