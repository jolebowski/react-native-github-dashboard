import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Image source={require('../assets/imgFromLinkedin.jpg')} size={40} />

const Repository = () => (
    <Card style={styles.card}>
        <Card.Title subtitleStyle={styles.cardSubtitle} 
        titleStyle={styles.cardTitle} title="jolebowski" 
        subtitle="https://github.com/jolebowski/Camp-Us" 
        left={LeftContent} />
        <Card.Content style={styles.cardContent}>
        <Title>aero.js</Title>
        <Paragraph>javascript</Paragraph>
        <Text style={styles.cardText}>Minimaslistic Javascript MVC libray</Text>
        </Card.Content>
    </Card>    
 );

export default Repository

const styles = StyleSheet.create({
    cardSubtitle:{
        fontSize: 14,
        fontWeight: "bold"
    },
    cardTitle:{
        left:90
    },
    card: {
        paddingTop:50,
    },
    cardContent: {
        justifyContent:'center',
        alignItems:'center',
        paddingTop:25,
    },
    cardText: {
        fontSize:17,
        paddingTop:30,
        color:'#000'
    }
  })