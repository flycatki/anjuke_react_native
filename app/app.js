/**
 * Created by jiangyh on 17-3-28.
 */
import React, { Component } from 'react';

import {
  View,
} from 'react-native';

import Wrapper from './components/wrapper';
import { StackNavigator } from 'react-navigation';

const AppNavigator = StackNavigator({
  Index: {
    screen: Wrapper,
  }
}, {
  initialRouteName: 'Index',
  headerMode: 'none',
  mode: 'card',
});

export default () => <AppNavigator/>;