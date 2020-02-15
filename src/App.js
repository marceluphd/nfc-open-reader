import * as React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'react-native-elements';
import NfcScanAndroid from './Components/NfcScanAndroid';
import HomeScreen from './Screens/HomeScreen';
import TagDetailScreen from './Screens/TagDetailScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
          <Stack.Screen name="TagDetail" component={TagDetailScreen} options={{ title: 'Tag Info' }} />
        </Stack.Navigator>
      </NavigationContainer>

      {Platform.OS === 'android' && (
        <NfcScanAndroid />
      )}
    </ThemeProvider>
  );
}

export default App;