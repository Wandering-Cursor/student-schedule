import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('login', () => {
    const group: Ref<string | null> = ref(null)

    function setGroup(newGroup: string) {
        group.value = newGroup
    }
    function clearGroup() {
        group.value = null
    }
    function getGroup() {
        return group.value
    }

    return { setGroup, clearGroup, getGroup }
})
