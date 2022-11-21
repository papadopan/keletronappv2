
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bookings } from './Bookings';
import { Profile } from './Profile';
import { HomeScreen } from './HomeScreen';

const Tab = createBottomTabNavigator();


export const Home = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Bookings" component={Bookings} options={{headerShown:false}} />
        <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
    </Tab.Navigator>

  )
}


