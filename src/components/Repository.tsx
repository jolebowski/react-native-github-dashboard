import React, {FC} from 'react'
import {StyleSheet, Text } from 'react-native';
import {Card, Title, Paragraph, Avatar } from 'react-native-paper';

type Owner = {
    login:string,
    avatar_url : string
}
type Props = {
    item: {
        description:string,
        html_url: string,
        language: string,
        owner: Owner,
        name:string
    },
 }
const Repository: FC<Props> = ({item}) => {    
    return(
        <Card style={styles.card}>
            <Card.Title 
                subtitleStyle={styles.cardSubtitle} 
                titleStyle={styles.cardTitle} 
                title={item.owner.login} 
                subtitle={item.html_url} 
                left={() => <Avatar.Image 
                source={{uri: item.owner.avatar_url}}/>}
            />
            <Card.Content style={styles.cardContent}>
            <Title>{item.name}</Title>
            <Paragraph>{item.description}</Paragraph>
            <Text style={styles.cardText}>{item.language}</Text>
            </Card.Content>
        </Card>
 );
}
export default Repository

const styles = StyleSheet.create({
    cardSubtitle:{
        fontSize: 16,
        fontWeight: "bold",
        left:10,
    },
    cardTitle:{
        left:90
    },
    card: {
        paddingTop:50,
        flexDirection:'column',
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