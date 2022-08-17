/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import navigationStrings from './src/constants/navigationStrings';
import Address from './src/screens/Address/Address';
import Cart from './src/screens/Cart/Cart';
import Profile from './src/screens/Profile/Profile';
import Food from './src/screens/Food/Food';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home/Home';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#900',
          tabBarInactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name={navigationStrings.HOME}
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Icon
                  name="md-home-outline"
                  size={30}
                  color={focused ? '#900' : 'gray'}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={navigationStrings.FOOD}
          component={Food}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Icon
                  name="md-restaurant"
                  size={30}
                  color={focused ? '#900' : 'gray'}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={navigationStrings.CART}
          component={Cart}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Icon
                  name="md-basket"
                  size={30}
                  color={focused ? '#900' : 'gray'}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={navigationStrings.ADDRESS}
          component={Address}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Icon
                  name="md-map"
                  size={30}
                  color={focused ? '#900' : 'gray'}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={navigationStrings.PROFILE}
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <FontAwesome
                  name="user-circle"
                  size={30}
                  color={focused ? '#900' : 'gray'}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
