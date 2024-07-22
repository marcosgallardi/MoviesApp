import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import { HomeScreen } from './presentation/screens/home/HomeScreen';
import { Navigation } from './presentation/navigations/Navigation';

export const App = () => {
  return (
    <NavigationContainer>
  <Navigation/>
    </NavigationContainer>
  );
};
