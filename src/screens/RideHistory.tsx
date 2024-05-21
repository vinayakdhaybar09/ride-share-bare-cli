import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import React from 'react';
import {Box, Divider, ScrollView} from '@gluestack-ui/themed';
import RideInfoCard from '../components/RideInfoCard';

const OrdeHistoryCard = () => {
  return (
    <Box style={styles.resultCardStyle}>
      <View style={styles.cardInfoView}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706918400&semt=ais',
          }}
          style={styles.image}
        />
        <View style={styles.userInfo}>
          <Text style={styles.primaryFont}>Pavan kumar</Text>
          <Text style={styles.secondaryFont}>Date : 26/02/2024</Text>
          <Text style={styles.secondaryFont}>Starting time : 11:30 am</Text>
          {/* <Text style={styles.secondaryFont}>
                Price :<Text style={styles.primaryFont}> 50 ₹</Text>
              </Text> */}
        </View>
        <Text style={{fontSize: 30, color: '#101010'}}>₹ 50</Text>
      </View>
      <Divider />
      {/* <View style={styles.buttonView}> */}
      <TouchableOpacity
        style={styles.outlinedButton}
        // onPress={() => setShowActionsheet(true)}
      >
        <Text style={styles.buttonText}>View trip details</Text>
      </TouchableOpacity>
      {/* </View> */}
    </Box>
  );
};

const RideHistory = () => {
  return (
    <Box padding={20}>
      <Text>RideHistory</Text>
      <ScrollView>
        {
          
          <OrdeHistoryCard />
        }
      </ScrollView>
    </Box>
  );
};

export default RideHistory;

const styles = StyleSheet.create({
  resultCardStyle: {
    width: '100%',
    // height: 200,
    padding: 20,
    // borderRadius: 16,
    rowGap: 10,
    elevation: 3,
    backgroundColor: '#fff',
    // marginRight: 20,
  },
  cardInfoView: {
    flexDirection: 'row',
    columnGap: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  userInfo: {
    gap: 4,
  },
  primaryFont: {
    fontSize: 20,
    color: '#101010',
  },
  secondaryFont: {
    fontSize: 12,
    color: '#5C5C5C',
  },
  seatAvailable: {
    borderWidth: 1,
    borderColor: '#08B619',
    backgroundColor: '#cef0d1',
    borderRadius: 12,
  },
  seatAvailableText: {
    fontSize: 8,
    paddingHorizontal: 6,
    paddingVertical: 4,
    color: '#08B619',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#A3A3A3',
    paddingTop: 10,
  },
  outlinedButton: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#000',
  },
});
