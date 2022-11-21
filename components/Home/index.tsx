
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from '../Login';
import { SignUp } from '../SignUp';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();


export const Home = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Homes" component={Login}
        options={{
            tabBarIcon: ({ color }) => <Icon name="setting" size={22} color={color}/>
            }}
        />
        <Tab.Screen name="Settings" component={SignUp} />
    </Tab.Navigator>

  )
}


