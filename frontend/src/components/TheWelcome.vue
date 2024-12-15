<script setup lang="ts">
import {getGroups} from "@/api/group";
import type { Components } from "@/api/openapi";
import {onMounted, ref, type Ref} from "vue";

const groups:Ref<Components.Schemas.Group[]> = ref([]);

onMounted(async () => {
    groups.value = (await getGroups(null)).data.results;
});

</script>

<template>
    <main>
        <h1>Welcome to the Group Manager</h1>
        <p>Here you can manage your groups</p>
        <ul>
            <li v-for="group in groups" :key="group.uuid">
                <router-link :to="'/group/' + group.uuid">{{ group.name }}</router-link>
            </li>
        </ul>
    </main>
</template>
