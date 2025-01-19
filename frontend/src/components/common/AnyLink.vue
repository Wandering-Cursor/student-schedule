<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import Variant from '@/enums/Variant'

const props = defineProps({
  idField: {
    type: String,
    required: true,
  },
  nameField: {
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
  linkTo: {
    type: String,
    default: '',
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
    :to="{ name: linkTo, params: { id: idField } }"
    :class="buttonClass()"
  >
    <h1 v-if="variant == Variant.H1">{{ nameField }}</h1>
    <h2 v-if="variant == Variant.H2">{{ nameField }}</h2>
    <h3 v-if="variant == Variant.H3">{{ nameField }}</h3>
    <h4 v-if="variant == Variant.H4">{{ nameField }}</h4>
    <h5 v-if="variant == Variant.H5">{{ nameField }}</h5>
    <h6 v-if="variant == Variant.H6">{{ nameField }}</h6>
    <p v-if="variant == Variant.P">{{ nameField }}</p>
  </Button>
</template>

<style scoped>
.link-button {
  padding: 0;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
