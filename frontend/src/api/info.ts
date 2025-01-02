import { api } from '@/api/base.ts'
import type { Client as StudentScheduleClient } from '@/api/openapi.d.ts'

async function getInfoPages(params: { page: number }) {
  const client = await api.getClient<StudentScheduleClient>()
  return await client.info_page_page_list(params)
}

async function retrieveInfoPage(pageId: string) {
  const client = await api.getClient<StudentScheduleClient>()
  return await client.info_page_page_retrieve(pageId)
}

export { getInfoPages, retrieveInfoPage }
