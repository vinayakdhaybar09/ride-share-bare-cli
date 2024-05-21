import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {RefObject, useRef, useState} from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  Box,
  Button,
  ButtonText,
  CloseIcon,
  Divider,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Icon,
  Input,
  InputField,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollView,
} from '@gluestack-ui/themed';
import {Rating} from 'react-native-ratings';

const windowHeight = Dimensions.get('window').height;

interface IRequestModal {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  ref: RefObject<any>;
}

const RequestModal = ({showModal, setShowModal, ref}: IRequestModal) => {
  return (
    <Modal
      isOpen={showModal}
      onClose={() => {
        setShowModal(false);
      }}
      finalFocusRef={ref}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">Request for ride</Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Text>
            Elevate user interactions with our versatile modals. Seamlessly
            integrate notifications, forms, and media displays. Make an impact
            effortlessly.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="outline"
            size="sm"
            action="secondary"
            mr="$3"
            onPress={() => {
              setShowModal(false);
            }}>
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button
            size="sm"
            action="positive"
            borderWidth="$0"
            onPress={() => {
              setShowModal(false);
            }}>
            <ButtonText>Request</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const RideInfoCard = () => {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  const ref = useRef(null);
  return (
    <View style={styles.resultCardStyle}>
      <View style={styles.cardInfoView}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706918400&semt=ais',
          }}
          style={styles.image}
        />
        <View style={styles.userInfo}>
          <Text style={styles.primaryFont}>Pavan kumar</Text>
          <Text style={styles.secondaryFont}>Starting time : 11:30 am</Text>
          <Text style={styles.secondaryFont}>
            Price :<Text style={styles.primaryFont}> 50 ₹</Text>
          </Text>
        </View>
        <View style={styles.seatAvailable}>
          <Text style={styles.seatAvailableText}>1 Seats available</Text>
        </View>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.outlinedButton}
          onPress={() => setShowActionsheet(true)}>
          <Text>View trip details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containedButton}
          onPress={() => setShowModal(true)}
          ref={ref}>
          <Text style={styles.buttonText}>Request for ride</Text>
        </TouchableOpacity>
      </View>

      <RequestModal
        showModal={showModal}
        setShowModal={setShowModal}
        ref={ref}
      />

      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent h={windowHeight / 2} zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ScrollView width={'100%'} padding={20}>
            <View style={styles.actionCardInfoView}>
              <Box alignItems="center" rowGap={6}>
                <Image
                  source={{
                    uri: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706918400&semt=ais',
                  }}
                  style={styles.sheetImage}
                />
                <Text style={styles.secondaryFont}>Male</Text>
              </Box>
              <View style={styles.sheetUserInfo}>
                <Text style={styles.primaryFont}>Pavan kumar</Text>
                <Rating
                  // onFinishRating={e => console.log('Rating is: ' + e)}
                  ratingCount={5}
                  imageSize={20}
                  readonly
                  minValue={3}
                />
                <Text style={styles.secondaryFont}>
                  Starting time : 11:30 am
                </Text>
                <Text style={styles.secondaryFont}>
                  Price :<Text style={styles.primaryFont}> 50 ₹</Text>
                </Text>
              </View>
              <View style={[styles.seatAvailable, {marginLeft: 'auto'}]}>
                <Text style={styles.seatAvailableText}>1 Seats available</Text>
              </View>
            </View>
            <Divider marginVertical={20} />
            <Box rowGap={10}>
              <Box rowGap={4}>
                <FormControlLabel>
                  <FormControlLabelText>Starting point</FormControlLabelText>
                </FormControlLabel>
                <Input style={styles.inputStyle}>
                  <InputField
                    type="text"
                    defaultValue="46/4, Hosur Rd, Kudlu Gate, Krishna Reddy
                    Industrial Area, H.S, R Extension, Bengaluru, Karnataka 560068"
                    placeholder="Contact No"
                    keyboardType="number-pad"
                  />
                </Input>
              </Box>
              <Box rowGap={4}>
                <FormControlLabel>
                  <FormControlLabelText>Destination point</FormControlLabelText>
                </FormControlLabel>
                <Input style={styles.inputStyle}>
                  <InputField
                    type="text"
                    defaultValue="46/4, Hosur Rd, Kudlu Gate, Krishna Reddy
                    Industrial Area, H.S, R Extension, Bengaluru, Karnataka 560068"
                    placeholder="Contact No"
                    keyboardType="number-pad"
                  />
                </Input>
              </Box>
            </Box>
            <Divider marginVertical={20} />
            <Text>Reviews</Text>
            {/* <Rating
              // onFinishRating={e => console.log('Rating is: ' + e)}
              ratingCount={5}
              // showRating
              // imageSize={20}
              readonly
              minValue={3}
            /> */}
            <Box rowGap={24}>
              <Box style={styles.actionCardInfoView}>
                <Box alignItems="center" rowGap={6}>
                  <Image
                    source={{
                      uri: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706918400&semt=ais',
                    }}
                    style={styles.image}
                  />
                  <Text style={styles.secondaryFont}>Male</Text>
                </Box>
                <Box style={styles.sheetUserInfo}>
                  <Text style={styles.primaryFont}>Ranjit Panday</Text>
                  <Rating
                    // onFinishRating={e => console.log('Rating is: ' + e)}
                    ratingCount={5}
                    imageSize={20}
                    readonly
                    minValue={3}
                  />
                  <Text style={styles.secondaryFont}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Text>
                </Box>
              </Box>
              <Box style={styles.actionCardInfoView}>
                <Box alignItems="center" rowGap={6}>
                  <Image
                    source={{
                      uri: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706918400&semt=ais',
                    }}
                    style={styles.image}
                  />
                  <Text style={styles.secondaryFont}>Male</Text>
                </Box>
                <Box style={styles.sheetUserInfo}>
                  <Text style={styles.primaryFont}>Ranjit Panday</Text>
                  <Rating
                    // onFinishRating={e => console.log('Rating is: ' + e)}
                    ratingCount={5}
                    imageSize={20}
                    readonly
                    minValue={3}
                  />
                  <Text style={styles.secondaryFont}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Text>
                </Box>
              </Box>
            </Box>
          </ScrollView>
        </ActionsheetContent>
      </Actionsheet>
    </View>
  );
};

export default RideInfoCard;

const styles = StyleSheet.create({
  resultCardStyle: {
    width: 350,
    height: 200,
    padding: 20,
    borderRadius: 16,
    rowGap: 10,
    elevation: 3,
    backgroundColor: '#fff',
    marginRight: 20,
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
    width: '48%',
    alignItems: 'center',
  },
  containedButton: {
    backgroundColor: '#101010',
    padding: 10,
    borderRadius: 16,
    columnGap: 10,
    justifyContent: 'center',
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },

  sheetImage: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  sheetUserInfo: {
    alignItems: 'flex-start',
    rowGap: 6,
  },
  actionCardInfoView: {
    flexDirection: 'row',
    columnGap: 24,
    // justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
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
});
