<script setup lang="ts">
import InfoList from '@/components/info/InfoList.vue'
</script>

<template>
  <div class="contained-wrapper">
    <Panel :header="$t('info.title')">
      {{ $t('info.description') }}
    </Panel>
    <InfoList />
  </div>
</template>
