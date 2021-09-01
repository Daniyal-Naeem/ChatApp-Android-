import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Colors from "../constants/Colors"
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
} from '../src/screens'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
const Stack = createStackNavigator()

const AuthNavigation = ({navigation}) => {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '491907695498-6bhh7ghdvkrn7j0cp61nfeokau1o3ckn.apps.googleusercontent.com',
    });
  }, []);

  return (
    
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
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
        </Stack.Navigator>
  )
}
export default AuthNavigation;