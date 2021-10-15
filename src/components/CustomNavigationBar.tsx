import React, {FC} from 'react'
import { Appbar, Title } from 'react-native-paper';
import { StyleSheet } from 'react-native';

type Props = {
  navigation: any,
  back?: any,
  title?: string
}

const CustomNavigationBar: FC<Props> = ({navigation, back, title = 'Github Dashboard Sample'}) => {
  return(
    <Appbar.Header style={styles.bar}>
      {back ? <Appbar.BackAction color="white" onPress={navigation.goBack} />
       : <Appbar.Action color="white" icon="menu" />}
      <Title  style={styles.title}>{title}</Title>
    </Appbar.Header>
  );
}

export default CustomNavigationBar

const styles = StyleSheet.create({
  bar: {
    backgroundColor:'#20BCD3'
  },
  title: {
    color: '#fff',
    fontSize:25,
    marginLeft: 13
  },
  menuIcon:{
    color: '#fff',
  }
})