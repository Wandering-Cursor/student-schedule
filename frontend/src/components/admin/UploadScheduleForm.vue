<script setup lang="ts">
import { InputText, type FileUploadSelectEvent } from 'primevue'
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'

import { uploadSchedule as apiUploadSchedule } from '@/api/admin'

const canUpload = ref(true)
const toast = useToast()

const getTomorrow = () => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow
}

const date = ref<Date>(getTomorrow())
const photoScheduleName = ref<string>('')
const images = ref<File[]>([])
const teacherSchedulePhotos = ref<File[]>([])
const file = ref<File | null>(null)

const onImagesSelected = (event: FileUploadSelectEvent) => {
  images.value = event.files
}

const onTeacherSchedulePhotosSelected = (event: FileUploadSelectEvent) => {
  teacherSchedulePhotos.value = event.files
}

const onFileSelect = (event: FileUploadSelectEvent) => {
  file.value = event.files[0]
}

const uploadSchedule = async () => {
  canUpload.value = false
  try {
    await apiUploadSchedule({
      forDate: date.value,
      photos: images.value,
      teacherSchedulePhotos: teacherSchedulePhotos.value,
      file: file.value,
      name: photoScheduleName.value,
    })
  } catch (error) {
    toast.add({ severity: 'error', summary: 'Error', detail: (error as any).message, life: 5000 })
    canUpload.value = true
    return
  }
  toast.add({
    severity: 'success',
    summary: 'Success',
    detail: 'admin.schedule.upload.success',
    life: 3000,
  })
  canUpload.value = true
}
</script>

<template>
  <main class="contained-wrapper">
    <Fieldset :legend="$t('admin.schedule.upload.date')">
      <DatePicker v-model="date" />
    </Fieldset>
    <Fieldset
      :legend="$t('admin.schedule.upload.photos')"
      :pt="{ content: { class: 'contained-wrapper' } }"
    >
      <FloatLabel variant="on" class="flex">
        <InputText v-model="photoScheduleName" id="photoScheduleName" />
        <label for="photoScheduleName">{{ $t('admin.schedule.upload.name') }}</label>
      </FloatLabel>

      <FileUpload
        @select="onImagesSelected"
        :multiple="true"
        customUpload
        accept="image/*"
        :maxFileSize="1000000"
        :show-upload-button="false"
      />
    </Fieldset>
    <Fieldset :legend="$t('admin.schedule.upload.teacherSchedulePhotos')">
      <FileUpload
        @select="onTeacherSchedulePhotosSelected"
        :multiple="true"
        customUpload
        accept="image/*"
        :maxFileSize="1000000"
        :show-upload-button="false"
      />
    </Fieldset>
    <Fieldset :legend="$t('admin.schedule.upload.file')">
      <FileUpload
        @select="onFileSelect"
        customUpload
        accept=".csv"
        :maxFileSize="1000000"
        :show-upload-button="false"
      />
    </Fieldset>
    <Button :label="$t('labels.submit')" @click="uploadSchedule" :disabled="!canUpload" />
  </main>
</template>

<style scoped>
.input-field {
  display: flex;
  flex-direction: column;
}
</style>
