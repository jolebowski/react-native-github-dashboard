import {Alert} from 'react-native'
import {BASE_URL} from './api.constant'

type userName = {
    username: string,
}

export async function profile (username: string){
    const profile = await fetch(`${BASE_URL}${username}`)
    .then((res) => res.json())
    return profile 
}

export async function repositories (username: string): Promise<userName>{
    let result 
    try {
        const user = await profile(username)        
        const listRepositories = await fetch(user.repos_url)
        .then((res) =>res.json())
        result = listRepositories
    } catch (error) {
        Alert.alert("The user doesn't exist")
    }  
    return result
}
