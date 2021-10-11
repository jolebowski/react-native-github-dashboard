import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header';
import Repository from '../components/Repository';

const screens = {
    Home: {
        screen: Header
    },
    detailsRepository: {
        screen: Repository
    }
}
const Home = createStackNavigator(screens)

export default NavigationContainer(Home)