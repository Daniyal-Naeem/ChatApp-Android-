import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Colors from "../constants/Colors"
import {MessagesScreen} from '../src/screens'

const Stack = createStackNavigator()

const HomeNavigation = () => {

  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: Colors.light.tint,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTintColor: Colors.light.background,
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        >
          <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}
export default HomeNavigation;