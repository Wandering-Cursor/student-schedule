<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { useUserStore } from './stores/login'

const userGroupStore = useUserStore()

const menuItems = ref([
  [
    {
      label: 'labels.home',
      icon: 'pi pi-fw pi-home',
      url: '/',
    },
    {
      label: 'labels.groups',
      icon: 'pi pi-fw pi-users',
      url: '/group',
    },
    {
      label: 'labels.schedule',
      icon: 'pi pi-fw pi-calendar',
      url: '/schedule',
    },
    {
      label: 'labels.docs',
      icon: 'pi pi-fw pi-file',
      url: '/documents',
    },
  ],
])
</script>

<template>
  <div class="app-container">
    <MegaMenu :model="menuItems">
      <template #start>
        <img class="logo" src="./assets/logo.svg" alt="Vue logo" />
      </template>
      <template #item="{ item }">
        <div class="menu-items">
          <Button
            as="router-link"
            :icon="subitem.icon"
            :label="$t(subitem.label as string)"
            :to="subitem.url"
            v-for="subitem in item"
          />
        </div>
      </template>
      <template #end>
        <Button
          as="router-link"
          icon="pi pi-fw pi-sign-in"
          :label="$t('labels.login')"
          to="/login"
          v-if="!userGroupStore.isTokenSet()"
        />
        <Button
          as="router-link"
          icon="pi pi-fw pi-sign-out"
          :label="$t('labels.logout')"
          to="/logout"
          v-else
        />
      </template>
    </MegaMenu>
    <div class="main-content">
      <div class="scrollable-content">
        <RouterView />
      </div>
    </div>
  </div>
  <Toast />
</template>

<style scoped>
.app-container,
.main-content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.app-container {
  max-width: 1920px;
}

.menu-items {
  display: flex;
  gap: 1rem;
}

.main-content {
  flex: 1;
  overflow: hidden;
}

.scrollable-content {
  flex: 1;
  overflow-y: auto;
  max-height: 100%;
}

@media screen and (max-width: 768px) {
  .menu-items {
    flex-direction: column;
  }
}
</style>
