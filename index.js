/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { NativeBaseProvider } from 'native-base';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import i18n from './i18n';
import { storage } from './mmkv';

// Create a client
const queryClient = new QueryClient();

const colorModeManager = {
  get: async () => {
    try {
      const val = storage.getString('@color-mode');
      return val === 'dark' ? 'dark' : 'light';
    } catch (e) {
      return 'light';
    }
  },
  set: async value => {
    try {
      storage.set('@color-mode', value);
    } catch (e) {
      console.log(e);
    }
  }
};

const Root = () => {
  const setLanguage = () => {
    try {
      const lang = storage.getString('@lang');
      i18n.changeLanguage(lang);
    } catch (e) {
      i18n.changeLanguage('el');
    }
  };
  useEffect(() => {
    setLanguage();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider colorModeManager={colorModeManager}>
        <App />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
