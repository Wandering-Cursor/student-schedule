<script setup lang="ts">
import UploadScheduleForm from '@/components/admin/UploadScheduleForm.vue'
</script>

<template>
  <main>
    <div class="contained-wrapper">
      <Panel :header="$t('admin.schedule.upload.title')">
        {{ $t('admin.schedule.upload.description') }}
      </Panel>
      <Panel>
        <UploadScheduleForm />
      </Panel>
    </div>
  </main>
</template>
