export type RootStackParamList = {
    Home: undefined,
    ListRepository: {
        repos?: { url :string}[], 
        user: {
            avatar_url: string,
            login: string
        } 
    },
    Repository: {item:{
        description:string,
        html_url: string,
        language: string,
        owner: {
            login:string,
            avatar_url:string
        },
        name: string    
    }}
}