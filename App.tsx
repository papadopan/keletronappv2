/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import { Colors} from 'react-native/Libraries/NewAppScreen';
import { Login } from "./components/Login"
import {SignUp} from "./components/SignUp"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
[]
const Stack = createNativeStackNavigator();


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "blue" : "white",
    flex: 1
  };

  const user = null

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {
        user ?
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Login}/>
          <Stack.Screen name="Details" component={SignUp} />
        </Stack.Navigator> :
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Login}/>
        <Stack.Screen name="Details" component={SignUp} />
      </Stack.Navigator>
      }
    </SafeAreaView>
  );
};


export default App;
