import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CreateRideBox from '../components/CreateRideBox';
import data from '../utils/driver.json';

import {Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText, Button, ButtonText, Text} from '@gluestack-ui/themed';
import RideInfoCard from '../components/RideInfoCard';
import MapBox from '../components/MapBox';

const windowHeight = Dimensions.get('window').height;

const Home = () => {
  return (
    <View style={styles.homeView}>
      {/* <View></View> */}
      {/* <MapBox /> */}
      {/* <View style={styles.overlay}> */}
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Create trip request</Text>
      </TouchableOpacity>
      <CreateRideBox />
      <FlatList
        style={{marginTop: 'auto', marginBottom: 'auto'}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        keyExtractor={item => item?._id}
        renderItem={({item}) => {
          return <RideInfoCard />;
        }}
      />
      {/* </View> */}

     
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeView: {},
  overlay: {
    height: windowHeight,
    position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#101010',
    padding: 10,
    borderRadius: 16,
    columnGap: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});
