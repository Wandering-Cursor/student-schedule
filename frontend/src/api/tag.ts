import { api } from '@/api/base.ts'
import type { Client as StudentScheduleClient } from '@/api/openapi.d.ts'

async function getTags(params: { page: number; name: string | undefined }) {
  const client = await api.getClient<StudentScheduleClient>()
  return await client.info_page_tag_list(params)
}

async function retrieveTag(tagId: string) {
  const client = await api.getClient<StudentScheduleClient>()
  return await client.info_page_tag_retrieve(tagId)
}

export { getTags, retrieveTag }
