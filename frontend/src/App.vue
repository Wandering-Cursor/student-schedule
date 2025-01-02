<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { useUserStore } from './stores/login'
import { usePrimeVue } from 'primevue/config'

const PrimeVue = usePrimeVue()
const userGroupStore = useUserStore()

const menuItems = ref([
  {
    label: 'labels.home',
    root: true,
    icon: 'pi pi-fw pi-home',
    route: '/',
  },
  {
    label: 'labels.groups',
    icon: 'pi pi-fw pi-users',
    route: '/group',
  },
  { label: 'labels.schedule', icon: 'pi pi-fw pi-calendar', route: '/schedule' },
  {
    label: 'labels.info',
    icon: 'pi pi-fw pi-file',
    route: '/info',
  },
  {
    label: 'admin.label',
    icon: 'pi pi-fw pi-cog',
    route: '/admin',
    visible: () => userGroupStore.isAdmin(),
  },
])

PrimeVue.config.ripple = true
</script>

<template>
  <div class="app-container">
    <Menubar :model="menuItems">
      <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span>{{ $t(item.label as string) }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span>{{ $t(item.label as string) }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
        </a>
      </template>
      <template #end>
        <div class="menu-items">
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
        </div>
      </template>
    </Menubar>
    <div class="main-content">
      <div class="scrollable-content">
        <RouterView />
      </div>
    </div>
  </div>
  <Toast>
    <template #message="slotProps">
      <div class="p-toast-message-text" data-pc-section="messagetext">
        <span class="p-toast-summary" data-pc-section="summary">{{
          $t(slotProps.message.summary)
        }}</span>
        <div class="p-toast-detail" data-pc-section="detail">
          <span>{{ $t(slotProps.message.detail) }}</span>
        </div>
      </div>
    </template>
  </Toast>
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
