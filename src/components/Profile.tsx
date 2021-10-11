import React, {useState} from 'react'
import { View, StyleSheet, Image, SafeAreaView, FlatList } from 'react-native';
import { Chip, List } from 'react-native-paper';
import Repository from './Repository';



const Profile = () => {

  const [data, setData ]= useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'aero.js',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f623',
      title: '3 Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa9S7f63',
      title: '4 Item',
    },
  ]);
  
  return(
      <View>
        {/* <Chip avatar={<Image
            style={styles.photoProfile}
            source={require('../assets/imgFromLinkedin.jpg')} 
            />}>
            Jolebowski
        </Chip> */}
        
        {/* <FlatList 
            data={data}
            renderItem={({item}) =>
            <View>
              <List.Item style={styles.listItem} title={item.title} left={() => <List.Icon style={styles.listIcon} icon="folder" />} />
            </View>
            }
        /> */}
        <Repository />
      </View>
   
  )
};


export default Profile

const styles = StyleSheet.create({
    photoProfile:{
        width: 30,
        height: 30,    
    },
    listItem:{
      padding: 0,
    },
    listIcon:{
      marginRight:60
    },

  })