import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from './Profile';

import { ProfilePage } from 'types/navigation';
import { Preview } from './Preview';

const Stack = createNativeStackNavigator<ProfilePage>();

export const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfilePage"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Preview" component={Preview} />
    </Stack.Navigator>
  );
};
