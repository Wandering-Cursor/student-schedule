<script setup lang="ts">
import router from '@/router'
import { useUserStore } from '@/stores/login'

const userGroupStore = useUserStore()

setTimeout(() => {
  userGroupStore.logout()
  router.push({ name: 'home' })
}, 2000)
</script>

<template>
  <main>
    <h1>{{ $t('labels.loggingOut') }}</h1>
  </main>
</template>
