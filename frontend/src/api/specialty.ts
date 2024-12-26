import { api } from '@/api/base.ts'
import type { Client as StudentScheduleClient } from '@/api/openapi.d.ts'

async function getSpecialties(params: { name?: string; page?: number } | null) {
  const client = await api.getClient<StudentScheduleClient>()
  return await client.org_specialty_list(params)
}

async function getSpecialty(params: { uuid: string }) {
  const client = await api.getClient<StudentScheduleClient>()
  return await client.org_specialty_retrieve(params)
}

export { getSpecialties, getSpecialty }
