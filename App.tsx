import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {config} from '@gluestack-ui/config';
import {
  GluestackUIProvider,
  Box,
  Text,
  Image,
  View,
} from '@gluestack-ui/themed';
import Header from './src/components/Header';
import RideInfoCard from './src/components/RideInfoCard';
import CreateRideBox from './src/components/CreateRideBox';
import AppNavigator from './src/navigation/Navigation';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // height: '100%',
  };

  return (
    <GluestackUIProvider config={config}>
      <AppNavigator />
    </GluestackUIProvider>
  );
}

export default App;
