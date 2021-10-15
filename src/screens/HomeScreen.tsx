import React from 'react'
import { useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './Root';
import InputSearch from '../components/InputSearch'

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
    const navigation = useNavigation<homeScreenProp>();    
    return( 
        <InputSearch navigation={navigation} />
    )
}

export default HomeScreen