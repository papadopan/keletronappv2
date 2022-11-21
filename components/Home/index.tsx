
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from '../Welcome/Login';
import { SignUp } from '../Welcome/SignUp';

const Tab = createBottomTabNavigator();


export const Home = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Login}
        />
        <Tab.Screen name="Bookings" component={SignUp} />
        <Tab.Screen name="Settings" component={SignUp} />
    </Tab.Navigator>

  )
}


