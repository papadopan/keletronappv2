import React from 'react';

import { Home } from '../Home';
import type { AuthScreen } from 'types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const Auth = () => {
  const Stack = createNativeStackNavigator<AuthScreen>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
