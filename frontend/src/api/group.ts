import { api } from '@/api/base.ts'
import type { Client as StudentScheduleClient } from '@/api/openapi.d.ts'

async function getGroups(params: { name?: string; page?: number; specialty?: string } | null) {
  const client = await api.getClient<StudentScheduleClient>()
  return await client.org_group_list(params)
}

async function getGroup(params: { uuid: string }) {
  const client = await api.getClient<StudentScheduleClient>()
  return await client.org_group_retrieve(params)
}

export { getGroups, getGroup }
