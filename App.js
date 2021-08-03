import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
useEffect(()=> {
  SplashScreen.hide()
}, [])
  return (
    <SafeAreaView>
      <ScrollView>
      <View>
        <Text>Hello</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
