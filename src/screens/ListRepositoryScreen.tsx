import React from 'react'
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RooStackParamList } from './Root';
import ListRepository from '../components/ListRepository'

type ListRepositoryScreenProp = StackNavigationProp<RooStackParamList, 'ListRepository'>;
type ListRepositoryScreenRouteProp = RouteProp<RooStackParamList, 'ListRepository'>;

const ListRepositoryScreen = () => {
    const navigation = useNavigation<ListRepositoryScreenProp>();
    const route = useRoute<ListRepositoryScreenRouteProp>();
    const { repos } = route.params;
    
    return(
        <ListRepository repos={repos} navigation={navigation} />
    )
}

export default ListRepositoryScreen