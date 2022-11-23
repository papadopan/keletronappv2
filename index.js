/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

// Create a client
const queryClient = new QueryClient()

const Root = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <NativeBaseProvider>
        <App />
      </NativeBaseProvider>
    </NavigationContainer>
  </QueryClientProvider>
)

AppRegistry.registerComponent(appName, () => Root)
