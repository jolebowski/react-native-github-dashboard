import  React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CustomNavigationBar from './src/components/CustomNavigationBar'
import { RootStackParamList} from './src/screens/Root';
import HomeScreen from './src/screens/HomeScreen';
import ListRepositoryScreen from './src/screens/ListRepositoryScreen'
import RepositoryScreen from './src/screens/RepositoryScreen';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => (
    <NavigationContainer>
     <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: CustomNavigationBar,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ListRepository" component={ListRepositoryScreen} />
        <Stack.Screen name="Repository" component={RepositoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
)
export default App