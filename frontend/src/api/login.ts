import { api } from '@/api/base.ts'
import type { Client as StudentScheduleClient } from '@/api/openapi.d.ts'

function getTokenAuthorization(token: string) {
  return { headers: { Authorization: `Token ${token}` } }
}

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
