import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, Image, Text} from '@gluestack-ui/themed';
import {Rating} from 'react-native-ratings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  return (
    <Box bgColor="#fff" flex={1}>
      <Box style={styles.backColor} />
      <Text textAlign="center" size="2xl" color="#fff" py={30}>
        Profile
      </Text>
      <Box style={styles.profileBox}>
        <Image
          borderRadius={100}
          source={{
            uri: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706918400&semt=ais',
          }}
          height={60}
          width={60}
        />
        <Box alignItems='center'>
          <Text size="xl" color="#101010">
            Manoj Patil
          </Text>
          <Text>Driver</Text>
        </Box>
        <Rating ratingCount={5} imageSize={20} readonly minValue={3} />
      </Box>
      <Box mx={30} rowGap={10} py={20}>
        <Box flexDirection="row" alignItems="center" columnGap={10}>
          <Ionicons name="call" size={22} color="#999" />
          <Text>1234567890</Text>
        </Box>
        <Box flexDirection="row" alignItems="center" columnGap={10}>
          <Ionicons name="mail" size={22} color="#999" />
          <Text>manojpatil@gmail.com</Text>
        </Box>
      </Box>
      <Box mx={30} gap={20}>
        <Box style={styles.boxStyle}>
          <Text>Total earnings</Text>
          <Box style={styles.iconBox}>
            <FontAwesome name="money" size={30} color="#101010" />
            <Text size="3xl" fontWeight="$bold" color="#101010">
              40000
            </Text>
          </Box>
        </Box>
        <Box style={styles.boxStyle}>
          <Text>Total rides</Text>
          <Box style={styles.iconBox}>
            <FontAwesome name="motorcycle" size={30} color="#101010" />
            <Text size="3xl" fontWeight="$bold" color="#101010">
              40
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;

const styles = StyleSheet.create({
  backColor: {
    backgroundColor: '#101010',
    width: '100%',
    height: 200,
    position: 'absolute',
    left: 0,
    right: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: -100,
  },
  profileBox: {
    rowGap: 10,
    padding: 20,
    backgroundColor: '#fff',
    elevation: 3,
    borderRadius: 20,
    marginHorizontal: 30,
    alignItems: 'center',
  },

  boxStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 20,
  },
  iconBox: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
