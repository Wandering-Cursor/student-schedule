import { api, getTokenAuthorization } from '@/api/base.ts'
import type { Client as StudentScheduleClient } from '@/api/openapi.d.ts'

async function login(params: { username: string; password: string }) {
  const client = await api.getClient<StudentScheduleClient>()
  return await client.auth_login_create(null, params)
}

async function getUserInfo(params: { token: string }) {
  const client = await api.getClient<StudentScheduleClient>()
  return await client.auth_info_retrieve(null, null, getTokenAuthorization(params.token))
}

async function logout(params: { token: string }) {
  const client = await api.getClient<StudentScheduleClient>()
  return await client.auth_logout_create(null, params, getTokenAuthorization(params.token))
}

export { login, logout, getUserInfo }
