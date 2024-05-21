import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
const Header = ({navigation}) => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.logoStyle}>Share Ride</Text>
      <TouchableOpacity onPress={() => navigation.navigate('RideHistory')}>
        <Icon name="settings-outline" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
  },
  logoStyle: {
    fontSize: 20,
    fontWeight: '600',
  },
});
