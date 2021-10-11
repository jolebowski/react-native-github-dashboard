import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native'
import { TextInput, Button  } from 'react-native-paper';

const InputSearch = () => (
    <View style={styles.container}>
        <TextInput
            label="Username"
            style={styles.input}
        />
        <Button style={styles.button} 
            mode="contained">search
        </Button>
    </View>

)
export default InputSearch

const styles = StyleSheet.create({
    container: {
      display:'flex',
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
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