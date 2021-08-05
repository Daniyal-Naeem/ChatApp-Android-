import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-native-paper'
import { theme } from './src/core/theme'
//import AuthNavigation from './navigation/AuthNavigation';
import HomeNavigation from './navigation/HomeNavigation';


const App = () => {
  useEffect(()=> {
    SplashScreen.hide()
  }, [])
  return (
    <Provider theme={theme}>
   {/* <AuthNavigation /> */}
     <HomeNavigation/>
    </Provider>
  )
}
export default App;