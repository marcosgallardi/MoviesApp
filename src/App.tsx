import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>MoviesApp</Text>
      </View>
    </NavigationContainer>
  );
};
