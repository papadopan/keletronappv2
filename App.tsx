/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './components/Home'
import { Welcome } from './components/Welcome'
import { Login } from './components/Welcome/Login'
import { SignUp } from './components/Welcome/SignUp'
;[]
const Stack = createNativeStackNavigator()

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'blue' : 'white',
    flex: 1,
  }

  const user = null
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {user ? (
        <Stack.Navigator>
          <Stack.Screen
            name="App"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="LogIn" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}
    </SafeAreaView>
  )
}

export default App
