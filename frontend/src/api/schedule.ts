import { api } from '@/api/base.ts'
import type { Client as StudentScheduleClient } from '@/api/openapi.d.ts'

async function getSchedule(params: {
  dateFrom?: string
  dateTo?: string
  forDate?: string
  page: number
}) {
  const client = await api.getClient<StudentScheduleClient>()
  return await client.schedule_list({
    date__lte: params.dateTo,
    date__gte: params.dateFrom,
    for_date: params.forDate,
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
