<script setup lang="ts">
import { ref } from 'vue';

const data = ref([]);
</script>

<template>
    <main>
        <Panel :header="$t('schedule.combined')">
            <DataView :value="data" data-key="id">

            </DataView>
            <Paginator></Paginator>
        </Panel>
    </main>
</template>
