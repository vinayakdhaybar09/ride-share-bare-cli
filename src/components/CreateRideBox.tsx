import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button, ButtonText, Text, useStyled} from '@gluestack-ui/themed';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

interface ICreateRideBox {
  handlePress?: () => void;
}

const CreateRideBox = ({handlePress}: ICreateRideBox) => {
  const [count, setCount] = useState(1);
  // const [date, setDate] = useState(new Date());
  const [date, setDate] = useState('Select date');
  const [time, setTime] = useState('Select time');
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const showMode = (currentMode: 'date' | 'time') => {
    setShow(true);
    setMode(currentMode);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleChange = (e: DateTimePickerEvent, selectedDate: Date | undefined) => {
    if (mode === 'date' && selectedDate) {
      setDate(
        selectedDate?.getDate() +
          '/' +
          (selectedDate?.getMonth() + 1) +
          '/' +
          selectedDate?.getFullYear(),
      );
      setShow(false);
    }

    if (mode === 'time'  && selectedDate) {
      setTime(
        selectedDate?.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        }),
      );

      setShow(false);
    }
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.inputCardStyle}>
      <View style={styles.createRideBox}>
        <Icon name="my-location" size={24} color="black" />
        <TextInput style={styles.inputStyle} placeholder="From" />
      </View>
      <View style={styles.createRideBox}>
        <Icon name="location-on" size={24} color="black" />
        <TextInput style={styles.inputStyle} placeholder="Where to" />
      </View>
      <View style={styles.dateTimeView}>
        <View style={[styles.createRideBox, {flex: 1}]}>
          <Icon name="calendar-month" size={24} color="black" />
          {/* <TouchableOpacity
            style={styles.inputStyle}
            onPress={() => showMode('date')}>
            <Text>{date}</Text>
          </TouchableOpacity> */}
          <TextInput
            style={styles.inputStyle}
            placeholder="Date"
            showSoftInputOnFocus={false}
            onPressIn={() => showMode('date')}
            value={date}
          />
        </View>
        <View style={[styles.createRideBox, {flex: 1}]}>
          <Icon name="access-time" size={24} color="black" />

          {/* <TouchableOpacity
            style={styles.inputStyle}
            onPress={() => showMode('time')}>
            <Text>{time}</Text>
          </TouchableOpacity> */}
          <TextInput
            style={styles.inputStyle}
            placeholder="Time"
            showSoftInputOnFocus={false}
            onPressIn={() => showMode('time')}
            value={time}
          />
        </View>

        {show && (
          <DateTimePicker
            mode={mode}
            value={new Date()}
            display="default"
            onChange={handleChange}
          />
        )}
      </View>
      <View style={styles.createRideBox}>
        <Icon name="people" size={24} color="black" />
        <View style={styles.counter}>
          <Button
            bgColor={count === 1 ? '#666' : '#101010'}
            onPress={handleDecrease}>
            <ButtonText>-</ButtonText>
          </Button>
          <Text>{count}</Text>
          <Button bgColor="#101010" onPress={handleIncrease}>
            <ButtonText>+</ButtonText>
          </Button>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Icon name="search" size={24} color="#fff" />
        <Text style={styles.buttonText}>Find trip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateRideBox;

const styles = StyleSheet.create({
  inputCardStyle: {
    padding: 20,
    borderRadius: 16,
    rowGap: 20,
    elevation: 8,
    backgroundColor: '#fff',
  },
  createRideBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  inputStyle: {
    borderWidth: 1,
    flex: 1,
    // padding: 6,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 16,
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
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  dateTimeView: {
    flexDirection: 'row',
    columnGap: 10,
  },
});
