import React, {useState, FC} from 'react';
import {View, StyleSheet, Alert} from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import {repositories, profile} from '../services/api'

type Props = {
  navigation: any
}

const InputSearch: FC<Props> = ({navigation}) => {
  
  const [username, setUsername] = useState('');

  const handlePress = async () => {
    if(username.length == 0){
      Alert.alert('Warning, please write your username')
    }else{
      const listRepositories = await repositories(username)
      const userProfile = await profile(username)

      if(listRepositories){
        navigation.navigate('ListRepository', {
          repos: listRepositories,
          user: userProfile
        });
      }
      setUsername("")
    }
  } 

  return(
    <>
      <View style={styles.container}>
        <TextInput
            label="Username"
            style={styles.input}
            onChangeText={(value) => setUsername(value)}
            value={username}
        />
        <Button 
            onPress={handlePress}
            style={styles.button} 
            mode="contained">search
        </Button>
      </View>
    </>
  )
}

export default InputSearch

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection:"row",
      backgroundColor:'#fff',

    },
    input: {
      width: 210, 
      backgroundColor:'#fff',
      marginRight:15
    },
    button: {
    backgroundColor:'#EC4899',
    paddingTop:5,
    height:50,
    marginTop:15,
    textTransform: 'capitalize'
    }
  })