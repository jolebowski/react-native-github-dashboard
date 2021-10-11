import React from 'react'
import { Appbar,Title, Colors } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import InputSearch from './InputSearch'

const Header: React.FC<{title?:string}> = ({title}) => (
    <Appbar style={styles.top}>
      <Appbar.Action color={Colors.white} icon="menu" />
      <Title  style={styles.title}>{title}</Title>
    </Appbar>
 );

export default Header

Header.defaultProps = {
  title : 'Github Dashboard Sample'
} 

const styles = StyleSheet.create({
  top: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
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