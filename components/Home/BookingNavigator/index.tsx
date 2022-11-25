import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Bookings } from './Bookings'
import { Booking } from './Booking'

const Stack = createNativeStackNavigator()

export const BookingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BookingsScreen"
        component={Bookings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{ title: 'New Booking' }}
      />
    </Stack.Navigator>
  )
}
