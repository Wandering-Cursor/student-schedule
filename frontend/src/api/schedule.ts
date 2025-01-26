import { api, getTokenAuthorization } from '@/api/base.ts'
import type { Client as StudentScheduleClient } from '@/api/openapi.d.ts'
import { useUserStore } from '@/stores/login'
import { getISODateWithoutTZ } from '@/utils/datetime'

async function getScheduleList(params: {
  dateFrom?: Date
  dateTo?: Date
  forDate?: Date
  page: number
}) {
  const client = await api.getClient<StudentScheduleClient>()
  return await client.schedule_schedule_list({
    date__lte: getISODateWithoutTZ(params.dateTo),
    date__gte: getISODateWithoutTZ(params.dateFrom),
    for_date: getISODateWithoutTZ(params.forDate),
    page: params.page,
  })
}

async function getSchedule(params: { id: string }) {
  const client = await api.getClient<StudentScheduleClient>()
  return await client.schedule_schedule_retrieve({
    uuid: params.id,
  })
}

async function getPhotoSchedule(params: { id: string }) {
  const client = await api.getClient<StudentScheduleClient>()
  return await client.schedule_photo_retrieve({
    uuid: params.id,
  })
}

async function getGroupSchedule(params: { id: string }) {
  const client = await api.getClient<StudentScheduleClient>()
  return await client.schedule_group_retrieve({
    uuid: params.id,
  })
}

async function getWeekScheduleForGroupList(params: { group: string | undefined }) {
  const client = await api.getClient<StudentScheduleClient>()
  return await client.schedule_week_group_list(params)
}

function getTokenOrError(userStore: ReturnType<typeof useUserStore> | undefined) {
  let token = userStore?.getToken()

  if (!token) {
    token = useUserStore().getToken()
  }
  if (token === null) {
    throw new Error('Token not set')
  }

  return token
}

async function getTeachersScheduleList(
  params: {
    page: number
    dateFrom?: Date
    dateTo?: Date
    forDate?: Date
  },
  userStore: ReturnType<typeof useUserStore> | undefined,
) {
  const client = await api.getClient<StudentScheduleClient>()
  const token = getTokenOrError(userStore)

  return await client.schedule_teacher_list(
    {
      date__lte: getISODateWithoutTZ(params.dateTo),
      date__gte: getISODateWithoutTZ(params.dateFrom),
      for_date: getISODateWithoutTZ(params.forDate),
      page: params.page,
    },
    null,
    getTokenAuthorization(token),
  )
}

async function getTeachersSchedule(
  params: { id: string },
  userStore: ReturnType<typeof useUserStore> | undefined,
) {
  const client = await api.getClient<StudentScheduleClient>()
  const token = getTokenOrError(userStore)

  return await client.schedule_teacher_retrieve(
    {
      uuid: params.id,
    },
    null,
    getTokenAuthorization(token),
  )
}

export {
  getScheduleList,
  getPhotoSchedule,
  getGroupSchedule,
  getWeekScheduleForGroupList,
  getSchedule,
  getTeachersScheduleList,
  getTeachersSchedule,
}
