import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-native-paper'
import { theme } from './src/core/theme'
import StackNavigator from './navigation/StackNavigator';



const App = () => {
  useEffect(()=> {
    SplashScreen.hide()
  }, [])
  return (
    <Provider theme={theme}>
     <StackNavigator/>
    </Provider>
  )
}
export default App;