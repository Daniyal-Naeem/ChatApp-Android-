import * as React from 'react';
import Colors from "../constants/Colors";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import MessagesScreen from '../src/screens/MessagesScreen';
import StatusScreen from '../src/screens/StatusScreen';
import CallScreen from '../src/screens/CallScreen';
import ChatScreen from '../src/screens/ChatScreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator()

const MessageStack = ({navigation}) => (
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({route}) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
      })}
      />
  </Stack.Navigator>
      </NavigationContainer>
);

const HomeNavigation = ({navigation}) => {

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