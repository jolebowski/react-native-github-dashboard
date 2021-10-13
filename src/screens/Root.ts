export type RooStackParamList = {
    Home: undefined,
    ListRepository: {repos?: {
        url :string
    }[] },
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