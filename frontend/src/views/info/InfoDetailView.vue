<script setup lang="ts">
import { retrieveInfoPage } from '@/api/info'
import type { Components } from '@/api/openapi'
import { useToast } from 'primevue'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import InfoTagsList from '@/components/info/InfoTagsList.vue'

const route = useRoute()
const toast = useToast()

const infoId = ref(route.params.id as string)
const infoPage: Ref<Components.Schemas.InfoPage | undefined> = ref(undefined)

async function loadInfoPage() {
  try {
    const response = await retrieveInfoPage(infoId.value)
    infoPage.value = response.data
  } catch (error) {
    toast.add({ severity: 'error', summary: 'Error', detail: `${error}` })
  }
}

onMounted(loadInfoPage)
</script>

<template>
  <div class="contained-wrapper">
    <Skeleton v-if="infoPage === undefined" height="75vh" />
    <Panel v-else :header="infoPage.title">
      <InfoTagsList :tags="infoPage.tags" />
      <pre>{{ infoPage.content }}</pre>
    </Panel>
    <Panel
      v-if="infoPage !== undefined && infoPage.related_files"
      :header="$t('info.relatedFiles')"
      :pt="{
        content: {
          class: 'grid-container',
        },
      }"
    >
      <Button
        v-for="file in infoPage.related_files"
        :key="file.uuid"
        as="a"
        target="_blank"
        :href="file.file"
        :label="file.display_name"
      />
    </Panel>
  </div>
</template>
