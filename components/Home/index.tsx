import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BookingNavigator } from './BookingNavigator'
import { Profile } from './Profile'
import { HomeScreen } from './HomeScreen'
import Icon from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator()

export const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={BookingNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
