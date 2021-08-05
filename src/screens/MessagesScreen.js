import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';


const MessagesScreen = ({navigation}) => {
    return (
      <SafeAreaView>
      <Header>Messages</Header>
       <ScrollView>

       </ScrollView>
      </SafeAreaView>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({

});
    
      // <Button
      //   mode="outlined"
      //   onPress={() =>
      //     navigation.reset({
      //       index: 0,
      //       routes: [{ name: 'StartScreen' }],
      //     })
      //   }
      // >
      //   Logout
      // </Button>


