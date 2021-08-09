import * as React from 'react';
import Colors from "../constants/Colors";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MessagesScreen from '../src/screens/MessagesScreen';
import StatusScreen from '../src/screens/StatusScreen';
import CallScreen from '../src/screens/CallScreen';


const Tab = createMaterialTopTabNavigator();

const HomeNavigation = () => {

  return (
    <NavigationContainer 
    initialRouteName="ChatScreen"
    >
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "white",
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor:Colors.light.tint},
    }}>
      <Tab.Screen name="Chats" component={MessagesScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={CallScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  )
}
export default HomeNavigation;