<script setup lang="ts">
import { Password } from 'primevue'
import { ref } from 'vue'

import { login } from '@/api/login'
import { useToast } from 'primevue/usetoast'
import { useUserStore } from '@/stores/login'
import router from '@/router'

const toast = useToast()
const userStore = useUserStore()

const placeholders = {
  username: 'КП-181',
  password: 'КП-181',
}

const formData = ref({
  username: '',
  password: '',
})

const resolver = (data: { username: string | null; password: string | null }) => {
  const errors: Record<string, { message: string }[]> = {
    username: [],
    password: [],
  }

  if (data.username == null) {
    errors.username = [{ message: 'Username is required.' }]
  }
  if (!data.password) {
    errors.password = [{ message: 'Password is required.' }]
  }

  return errors
}

const chooseGroup = async () => {
  let errorsExist = false
  const errors = resolver(formData.value)
  for (const key in errors) {
    if ((errors as any)[key].length > 0) {
      errorsExist = true
      for (let i = 0; i < errors[key].length; i++) {
        toast.add({
          severity: 'error',
          detail: errors[key][i].message,
          life: 5000,
        })
      }
    }
  }
  if (errorsExist) {
    return
  }

  const response = await login(formData.value)
  userStore.setToken(response.data.token as string)
  router.push('/')
}
</script>

<template>
  <main class="contained-wrapper">
    <div class="flex flex-col gap-1">
      <InputText
        v-model="formData.username"
        name="username"
        type="text"
        :placeholder="placeholders.username"
        fluid
      />
    </div>
    <div class="flex flex-col gap-1">
      <Password
        v-model="formData.password"
        name="password"
        :placeholder="placeholders.password"
        :feedback="false"
        toggleMask
        fluid
      />
    </div>
    <Button
      type="submit"
      severity="secondary"
      :label="$t('labels.submit')"
      :onclick="chooseGroup"
    />
  </main>
</template>
