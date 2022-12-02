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

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './components/Home';
import { Welcome } from './components/Welcome';
import { Login } from './components/Welcome/Login';
import { SignUp } from './components/Welcome/SignUp';
import { ForgotPassword } from './components/Welcome/ForgotPassword';
import { ActivationEmail } from './components/Welcome/ActivationEmail';
import type { RootAppParamList } from 'types/navigation';
import { useLogIn } from './hooks/useLogIn';
import { ValidatePassword } from './components/Welcome/ValidatePassword';

const Stack = createNativeStackNavigator<RootAppParamList>();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'blue' : 'white',
    flex: 1,
  };

  const { data } = useLogIn();

  const isLoggedIn = null;
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {isLoggedIn ? (
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
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ title: 'Forgot Password' }}
          />
          <Stack.Screen
            name="ActivationEmail"
            component={ActivationEmail}
            options={{ title: 'Activation Email' }}
          />
          <Stack.Screen
            name="ValidatePassword"
            component={ValidatePassword}
            options={{ title: 'Validate Password' }}
          />
        </Stack.Navigator>
      )}
    </SafeAreaView>
  );
};

export default App;
