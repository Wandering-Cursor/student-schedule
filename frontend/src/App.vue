<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'

const menuItems = ref(
  [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      to: '/'
    },
    {
      label: "Schedule",
      icon: "pi pi-fw pi-calendar",
      to: "/schedule"
    },
    {
      label: "Documents",
      icon: "pi pi-fw pi-file",
      to: "/documents"
    }
  ]
)

</script>

<template>
  <div class="app-container">
    <MegaMenu :model="menuItems">
      <template #start>
          <img class="logo" src="./assets/logo.svg" alt="Vue logo" />
      </template>
      <template #item="{item}">
        <Button as="router-link" :icon="item.icon" :label="item.label" :to="item.to"/>
      </template>
      <template #end>
          <InputText placeholder="Search" />
      </template>
    </MegaMenu>
    <RouterView class="main-content" />
  </div>
</template>

<style scoped>
.app-container, .main-content {
  height: 100%;
  width: 100%;
  
  display: flex;
  flex-direction: column;  
}
</style>
