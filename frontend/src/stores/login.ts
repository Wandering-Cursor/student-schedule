import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('login', () => {
    const token: Ref<string | null> = ref(null);
    const group: Ref<string | null> = ref(null);

    function setToken(newToken: string) {
        token.value = newToken
    }
    function clearToken() {
        token.value = null
    }
    function getToken() {
        return token.value
    }
    function isTokenSet() {
        return token.value !== null
    }

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

    return { setGroup, clearGroup, getGroup, isGroupSet, setToken, clearToken, getToken, isTokenSet }
})
