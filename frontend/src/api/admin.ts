import { api, getTokenAuthorization } from '@/api/base.ts'
import type { Client as StudentScheduleClient } from '@/api/openapi.d.ts'
import { useUserStore } from '@/stores/login.ts'
import { getISODateWithoutTZ } from '@/utils/datetime'

async function uploadSchedule(params: {
  forDate: Date
  photos: File[]
  teacherSchedulePhotos: File[]
  file: File | null
  name: string
}) {
  const client = await api.getClient<StudentScheduleClient>()
  const token = useUserStore().getToken()
  if (!token) {
    throw new Error('Token not set')
  }
  let options = getTokenAuthorization(token as string)

  const formData = new FormData()

  formData.append('for_date', getISODateWithoutTZ(params.forDate) as string)

  // Sets title for the Schedule Photos
  formData.append('name', params.name)

  // Add Schedule Photos
  params.photos.forEach((photo, index) => {
    formData.append(`photos[${index}]`, photo)
  })
  // Add Teacher Schedule Photos
  params.teacherSchedulePhotos.forEach((photo, index) => {
    formData.append(`teacher_schedule_photos[${index}]`, photo)
  })

  if (params.file) {
    formData.append('file', params.file)
  }

  // @ts-ignore
  return await client.admin_schedule_create(null, formData, options)
}

export { uploadSchedule }
