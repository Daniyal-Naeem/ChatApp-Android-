import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const StackNavigator = ({navigation}) => {
    return (
        <NavigationContainer>
         <AuthNavigation/>
         <HomeNavigation/>
        </NavigationContainer>
    )
}

export default StackNavigator
