import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Components } from '@/api/openapi'
import { getUserInfo, logout as apiLogout } from '@/api/login'

export const useUserStore = defineStore('login', () => {
  const token: Ref<string | null> = ref(localStorage.getItem('token') || null)
  const user: Ref<Components.Schemas.UserInfoResponse | null> = ref(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null,
  )

  function writeToLocalStorage() {
    localStorage.setItem('token', token.value as string)
    localStorage.setItem('user', JSON.stringify(user.value))
  }

  async function setToken(newToken: string) {
    token.value = newToken

    const response = await getUserInfo({ token: token.value })

    user.value = response.data

    writeToLocalStorage()
  }

  function clearAuth() {
    token.value = null
    user.value = null

    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  function getToken() {
    return token.value
  }

  function isTokenSet() {
    return token.value !== null
  }

  async function logout() {
    try {
      await apiLogout({ token: token.value as string })
    } catch (e) {
      console.debug(e)
    }
    clearAuth()
  }

  function isGroupSet() {
    if (!user.value) {
      return false
    }
    return user.value.related_group !== null
  }

  function getGroup() {
    let userValue = user.value
    if (!userValue) {
      return null
    }
    return userValue.related_group
  }

  function isAdmin() {
    let userValue = user.value
    if (!userValue) {
      return false
    }
    return userValue.is_staff
  }

  function getUsername() {
    let userValue = user.value
    if (!userValue) {
      return null
    }
    return userValue.username
  }

  return {
    getGroup,
    isGroupSet,
    setToken,
    getToken,
    isTokenSet,
    logout,
    isAdmin,
    getUsername,
  }
})
