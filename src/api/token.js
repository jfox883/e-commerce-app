import AsyncStorage from '@react-native-async-storage/async-storage'

import { TOKEN } from '../constants/consts'

export async function setTokenApi(token) {
    try {
        await AsyncStorage.setItem(TOKEN, token)
        return true
    } catch (error) {
        return null
    }
}

export async function getTokenApi() {   
    try {
        const res = await AsyncStorage.getItem(TOKEN)
        return res
    } catch (error) {
        return null
    }
}

export async function removeTokenApi() {
    try {
        await AsyncStorage.removeItem(TOKEN)
        return true
    } catch (error) {
        return null
    }
}