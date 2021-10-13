import {Alert} from 'react-native'
import {BASE_URL} from './api.constant'

type userName = {
    username: string,
}

async function repositories (username: string): Promise<userName | null>{
    let result 
    try {
        const profile = await fetch(`${BASE_URL}${username}`)
        .then((res) => res.json())
        const listRepositories = await fetch(profile.repos_url)
        .then((res) =>res.json())
        result = listRepositories
    } catch (error) {
        Alert.alert("L'utilisateur n'existe pas")
    }  
    return result
}

export default repositories