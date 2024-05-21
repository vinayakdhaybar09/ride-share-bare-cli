import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('PersonalInfo');
        }}>
        <AntDesign name="google" size={24} color="black" style={styles.icon} />
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  button: {
    margin: 20,
    flexDirection: 'row',
    backgroundColor: '#101010',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    columnGap: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  icon: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
  },
});
