import React, { useEffect, useRef, useState } from 'react';
import { I18nManager } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import _ from 'lodash';

import { Colors, Constants, Layout, } from '../../globals';
import { linkingConfigs } from './deep-links'

import { navigationRef } from './navigation-utils';
import { MainBottomTabsParamList, MainStackParamList } from './types';
import { AppIconName, AppIconSize } from '../components/icon/types';
import { AppIcon, Conditional, } from '../components';
import {
  HomeScreen,
  DetailScreen,
} from '../screens';
import { useDispatch } from 'react-redux';


const MainAppStack = createNativeStackNavigator<MainStackParamList>();
const MainTabs = createBottomTabNavigator<MainBottomTabsParamList>();


/**
 * Define core App navigator
 */
export const AppNavigator = () => {

  const routeNameRef = useRef<string>();

  const handleNavContainerReady = () => {
    routeNameRef.current = navigationRef.getCurrentRoute()?.name;
  };

 
 


  const handleNavStateChanged = () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.getCurrentRoute()?.name;

    if (previousRouteName !== currentRouteName) {
      // handle Analytics
    }
    routeNameRef.current = currentRouteName;
  };

  const RenderAppNavigations = (
    <NavigationContainer ref={navigationRef} linking={linkingConfigs} onReady={handleNavContainerReady} onStateChange={handleNavStateChanged}>
      <MainAppStack.Navigator>
        <MainAppStack.Screen name="Tabs" component={TabsNavigator} options={{ headerShown: false }} />
        {HomeScreens}
      </MainAppStack.Navigator>
    </NavigationContainer>
  )

  return RenderAppNavigations;
  
};

/**
 * Define Tab navigator
 */


const TabsNavigator = () => {
  const dispatch = useDispatch()

  return (
    <MainTabs.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarInactiveBackgroundColor: Colors.background,
        tabBarActiveBackgroundColor: Colors.background,
        lazy: true,
        tabBarActiveTintColor: Colors.primary['DEFAULT'],
        tabBarInactiveTintColor: Colors.foreground,
        tabBarIcon: ({ focused, color, size }) => {

          switch (route.name) {
            case 'HomeScreen':
              return (
                <AppIcon
                  name={focused ? AppIconName.homeFilled : AppIconName.home}
                  iconSize={AppIconSize.primary}
                  color={color}
                />
              );
           
            default:
              return '';
          }
        },
      })}
    >

    
          <MainTabs.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
            }}
           
          />
    </MainTabs.Navigator>
  );
};

const HomeScreens = (
  <MainAppStack.Group
    navigationKey="HomeScreens"
    screenOptions={{
      title: '',
      headerBackTitleVisible: false,
      headerShadowVisible: false,
    }}
  >
    <MainAppStack.Screen name="DetailScreen" component={DetailScreen} />
  </MainAppStack.Group>
);

