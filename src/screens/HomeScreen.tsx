import React from 'react'
import { useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RooStackParamList } from './Root';
import InputSearch from '../components/InputSearch'

type homeScreenProp = StackNavigationProp<RooStackParamList, 'Home'>;

const HomeScreen = () => {
    const navigation = useNavigation<homeScreenProp>();    
    return( 
        <InputSearch navigation={navigation} />
    )
}

export default HomeScreen