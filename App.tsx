/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { Auth } from './components/Auth';
import { WelcomeNavigator } from './components/Welcome/WelcomeNAvigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNavigator } from './types/navigation';
import { useColorModeValue } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://321e1c02f53e4b93877f2fd9faca2685@o4504728769921024.ingest.sentry.io/4504729015615488',
  enableNative: false
});

const Stack = createNativeStackNavigator<AppNavigator>();

const App = ({ navigation }) => {
  const isDarkMode = useColorModeValue('Light', 'Dark') === 'Dark';
  const text = useColorModeValue('Light', 'Dark');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#262626' : 'white',
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer
        theme={{
          dark: isDarkMode,
          colors: {
            primary: '#0e7490',
            card: isDarkMode ? '#262626' : 'rgb(255, 255, 255)',
            text: isDarkMode ? 'white' : 'rgb(28, 28, 30)',
            border: isDarkMode ? '#0e7490' : 'rgb(199, 199, 204)',
            background: 'rgb(242, 242, 242)',
            notification: 'rgb(255, 69, 58)'
          }
        }}
      >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="WelcomeNavigator" component={WelcomeNavigator} />
          <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Sentry.wrap(App);
