import { api } from '@/api/base.ts'
import type { Client as StudentScheduleClient } from '@/api/openapi.d.ts'
import { getISODateWithoutTZ } from '@/utils/datetime'

async function getSchedule(params: {
  dateFrom?: Date
  dateTo?: Date
  forDate?: Date
  page: number
}) {
  const client = await api.getClient<StudentScheduleClient>()
  return await client.schedule_list({
    date__lte: getISODateWithoutTZ(params.dateTo),
    date__gte: getISODateWithoutTZ(params.dateFrom),
    for_date: getISODateWithoutTZ(params.forDate),
    page: params.page,
  })
}

async function getPhotoSchedule(params: { id: string }) {
  const client = await api.getClient<StudentScheduleClient>()
  return await client.photo_schedule_retrieve({
    uuid: params.id,
  })
}

async function getGroupSchedule(params: { id: string }) {
  const client = await api.getClient<StudentScheduleClient>()
  return await client.group_schedule_retrieve({
    uuid: params.id,
  })
}

export { getSchedule, getPhotoSchedule, getGroupSchedule }
