import React, {FC} from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { List, Button} from 'react-native-paper';

type ListRepositoryProps = {
   repos?: {
       url :string
   }[] ,
   navigation: any,
}

const ListRepository: FC<ListRepositoryProps> = ({repos, navigation}) => {
    return (
        <>
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