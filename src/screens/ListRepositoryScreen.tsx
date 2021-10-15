import React from 'react'
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './Root';
import ListRepository from '../components/ListRepository'

type ListRepositoryScreenProp = StackNavigationProp<RootStackParamList, 'ListRepository'>;
type ListRepositoryScreenRouteProp = RouteProp<RootStackParamList, 'ListRepository'>;

const ListRepositoryScreen = () => {
    const navigation = useNavigation<ListRepositoryScreenProp>();
    const route = useRoute<ListRepositoryScreenRouteProp>();
    const { repos, user } = route.params;
    
    return(
        <ListRepository repos={repos} user={user} navigation={navigation} />
    )
}

export default ListRepositoryScreen