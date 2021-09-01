import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-native-paper'
import { theme } from './src/core/theme'
import Providers from './navigation';

const App = () => {
  useEffect(()=> {
    SplashScreen.hide()
  }, [])
  return (
    <Provider theme={theme}>
   <Providers/>
    </Provider>
  )
}
export default App;