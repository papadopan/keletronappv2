/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StorageManager, ColorMode } from 'native-base';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create a client
const queryClient = new QueryClient();

const colorModeManager = {
  get: async () => {
    try {
      const val = await AsyncStorage.getItem('@color-mode');
      return val === 'dark' ? 'dark' : 'light';
    } catch (e) {
      return 'light';
    }
  },
  set: async value => {
    try {
      await AsyncStorage.setItem('@color-mode', value);
    } catch (e) {
      console.log(e);
    }
  }
};

const Root = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <NativeBaseProvider colorModeManager={colorModeManager}>
        <App />
      </NativeBaseProvider>
    </NavigationContainer>
  </QueryClientProvider>
);

AppRegistry.registerComponent(appName, () => Root);
