import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('login', () => {
    const group: Ref<string | null> = ref(null);

    function setGroup(newGroup: string) {
        group.value = newGroup
    }
    function clearGroup() {
        group.value = null
    }
    function getGroup() {
        return group.value
    }
    function isGroupSet() {
        return group.value !== null
    }

    return { setGroup, clearGroup, getGroup, isGroupSet }
})
