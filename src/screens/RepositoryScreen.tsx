import React from 'react'
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { RooStackParamList } from './Root';

import Repositopry from '../components/Repository'

type ListRepositoryScreenRouteProp = RouteProp<RooStackParamList, 'Repository'>;


const RepositoryScreen = () => {
    const route = useRoute<ListRepositoryScreenRouteProp>();
    const { item } = route.params;
     
    return(
        <Repositopry item={item}/>
    )
}

export default RepositoryScreen
