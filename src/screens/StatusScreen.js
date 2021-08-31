import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../navigation/AuthProvider';


const  StatusScreen = () => {
  const {user, logout} = useContext(AuthContext);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chats!</Text>
        <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
                <Text style={styles.userBtnTxt}>Logout</Text>
              </TouchableOpacity>
      </View>
    );
  }
const styles = StyleSheet.create({
  userBtnTxt: {
    color: '#2e64e5',
  },
})
  export default StatusScreen;
