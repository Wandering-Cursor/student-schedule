<script setup lang="ts">
import { defineProps, type PropType } from 'vue'

enum Variant {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  P = 'P',
}

const props = defineProps({
  groupID: {
    type: String,
    required: true,
  },
  groupName: {
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
    :to="{ name: 'group-detail', params: { id: groupID } }"
    :class="buttonClass()"
  >
    <h1 v-if="variant == Variant.H1">{{ groupName }}</h1>
    <h2 v-if="variant == Variant.H2">{{ groupName }}</h2>
    <h3 v-if="variant == Variant.H3">{{ groupName }}</h3>
    <h4 v-if="variant == Variant.H4">{{ groupName }}</h4>
    <h5 v-if="variant == Variant.H5">{{ groupName }}</h5>
    <h6 v-if="variant == Variant.H6">{{ groupName }}</h6>
    <p v-if="variant == Variant.P">{{ groupName }}</p>
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
