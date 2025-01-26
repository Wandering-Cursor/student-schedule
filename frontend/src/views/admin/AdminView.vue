<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  {
    label: 'admin.schedule.label',
    icon: 'pi pi-fw pi-calendar',
    items: [
      {
        label: 'admin.schedule.upload.label',
        icon: 'pi pi-fw pi-upload',
        route: '/admin/schedule/upload',
      },
      {
        label: 'schedule.teacher.label',
        icon: 'pi pi-fw pi-calendar',
        route: '/admin/schedule/teacher',
      },
    ],
  },
])
</script>

<template>
  <main>
    <Menu :model="items">
      <!-- @vue-ignore -->
      <template #submenulabel="{ item }">
        <span :class="item.icon" />
        <span>{{ $t(item.label as string) }}</span>
      </template>
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span>{{ $t(item.label as string) }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span>{{ $t(item.label as string) }}</span>
        </a>
      </template>
    </Menu>
  </main>
</template>
