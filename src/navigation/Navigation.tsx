import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RideHistory from '../screens/RideHistory';
import Profile from '../screens/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import Login from '../screens/Login';
import PersonalInfo from '../components/PersonalInfo';

export enum Screens {
  HOME_SCREEN = 'Home',
  RIDE_HISTORY_SCREEN = 'RideHistory',
  PROFILE = 'Profile',
  LOGIN = 'Login',
  PERSONAL_INFO = 'PersonalInfo',
  BOTTOM = 'Bottom',
}

export type AppStackParamList = {
  [Screens.HOME_SCREEN]: undefined;
  [Screens.RIDE_HISTORY_SCREEN]: undefined;
  [Screens.PROFILE]: undefined;
  [Screens.LOGIN]: undefined;
  [Screens.PERSONAL_INFO]: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();
const Tab = createBottomTabNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName={Screens.PERSONAL_INFO}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.LOGIN} component={Login} />
      <Stack.Screen name={Screens.PERSONAL_INFO} component={PersonalInfo} />
      <Stack.Screen name={Screens.HOME_SCREEN} component={BottomTabs} />
    </Stack.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{header: Header}}>
      <Tab.Screen
        name={Screens.HOME_SCREEN}
        component={Home}
        options={{
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.RIDE_HISTORY_SCREEN}
        component={RideHistory}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Fontisto name="motorcycle" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Ionicons
              name={focused ? 'settings' : 'settings-outline'}
              size={24}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
