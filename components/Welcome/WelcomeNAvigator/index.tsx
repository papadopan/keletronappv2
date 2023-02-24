import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from '../index';
import { Login } from '../Login';
import { SignUp } from '../SignUp';
import { ForgotPassword } from '../ForgotPassword';
import { ActivationEmail } from '../ActivationEmail';
import type { WelcomeScreen } from 'types/navigation';

export const WelcomeNavigator = () => {
  const Stack = createNativeStackNavigator<WelcomeScreen>();
  return (
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
    </Stack.Navigator>
  );
};
