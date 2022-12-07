/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { Auth } from './components/Auth';
import { WelcomeNavigator } from './components/Welcome/WelcomeNAvigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNavigator } from './types/navigation';

const Stack = createNativeStackNavigator<AppNavigator>();

const App = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'blue' : 'white',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeNavigator" component={WelcomeNavigator} />
        <Stack.Screen name="Auth" component={Auth} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default App;
