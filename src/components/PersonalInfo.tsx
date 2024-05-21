import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  Box,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  ScrollView,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from '@gluestack-ui/themed';
import { Screens } from '../navigation/Navigation';

const PersonalInfo = ({navigation}) => {

  const handleLogin = ()=>{
    navigation.navigate(Screens.HOME_SCREEN)
  }

  return (
    <ScrollView padding={40} backgroundColor="#fff" flex={1}>
      <FormControl
        rowGap={16}
        size="lg"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        isRequired>
        <Box rowGap={6}>
          <FormControlLabel>
            <FormControlLabelText>Name</FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.inputStyle} backgroundColor="red">
            <InputField type="text" defaultValue="" placeholder="Surya Patil" />
          </Input>
        </Box>
        <Box rowGap={6}>
          <FormControlLabel>
            <FormControlLabelText>Email id</FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.inputStyle} backgroundColor="red">
            <InputField
              type="text"
              defaultValue=""
              placeholder="abcd@gmail.com"
              keyboardType="email-address"
            />
          </Input>
        </Box>

        <Box rowGap={6}>
          <FormControlLabel>
            <FormControlLabelText>Contact No.</FormControlLabelText>
          </FormControlLabel>
          <Input style={styles.inputStyle}>
            <InputField
              type="text"
              defaultValue=""
              placeholder="Contact No"
              keyboardType="number-pad"
            />
          </Input>
        </Box>
        <FormControlError>
          <FormControlErrorText>
            At least 10 digits are required.
          </FormControlErrorText>
        </FormControlError>
        <Box rowGap={6}>
          <FormControlLabel>
            <FormControlLabelText>Gender</FormControlLabelText>
          </FormControlLabel>
          <Select overflow="hidden">
            <SelectTrigger
              style={styles.inputStyle}
              variant="outline"
              size="md">
              <SelectInput placeholder="Gender ?" />
              <Entypo
                name="chevron-small-down"
                size={22}
                color="black"
                style={styles.icon}
              />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="Male" value="male" />
                <SelectItem label="Female" value="female" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </Box>
        <Box rowGap={6}>
          <FormControlLabel>
            <FormControlLabelText>Select mode</FormControlLabelText>
          </FormControlLabel>
          <Select overflow="hidden">
            <SelectTrigger
              style={styles.inputStyle}
              variant="outline"
              size="md">
              <SelectInput placeholder="Are you passanger / Driver ?" />
              <Entypo
                name="chevron-small-down"
                size={22}
                color="black"
                style={styles.icon}
              />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="Passanger" value="passanger" />
                <SelectItem label="Driver" value="driver" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </Box>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </FormControl>
    </ScrollView>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: '#fff',
    height: 50,
  },
  icon: {
    width: 30,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#101010',
    padding: 10,
    borderRadius: 16,
    columnGap: 10,
    justifyContent: 'center',
    marginTop:20
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});
