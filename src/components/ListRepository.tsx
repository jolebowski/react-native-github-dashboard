import React, {FC} from 'react'
import { FlatList, StyleSheet, View, Image } from 'react-native'
import { List, Button,Chip} from 'react-native-paper';

type ListRepositoryProps = {
   repos?: {
       url :string
   }[] ,
   user: {
    avatar_url: string,
    login:string
   }   
   navigation: any,
}

const ListRepository: FC<ListRepositoryProps> = ({repos, navigation, user}) => {
    return (
        <>
        <View style={styles.containerProfile}>
        <Chip avatar={<Image
            style={styles.photoProfile}
            source={{uri:user.avatar_url}} 
            />}>
            {user.login}
        </Chip>
        </View>
        <FlatList 
            data={repos}
            renderItem={({item}) =>
            <View style={styles.container}>
                <List.Item style={styles.listItem} titleStyle={{fontSize: 14, fontWeight:'900'}} 
                title={item.url} left={() => <List.Icon style={{width: 20, height:20}} icon="folder" />} />
                 <Button icon="arrow-right" color="#20BCD3"
                    onPress={() => 
                        navigation.push('Repository', {
                            item: item,
                          })                    
                    }>
                </Button>
            </View>
            }
        />
        </>
    )
}
export default ListRepository;

const styles = StyleSheet.create({
    photoProfile:{
        width: 30,
        height: 30,
    },
    containerProfile:{
        alignItems:"center",
        marginBottom: 10,
        marginTop: 15,
    },
    container: {
        borderBottomWidth:1
    },
    listItem:{
        padding: 8,
    },
    listIcon: {
        fontSize:102
    }
})