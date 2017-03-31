/**
 * Created by jiangyh on 17-3-28.
 */
import React, { Component } from 'react';

import {
  TabNavigator,
} from 'react-navigation';

import HomeTab from '../pages/Home';
import ChatPage from '../pages/Chat';
import RecommendPage from '../pages/Recommend';
import MyPage from '../pages/My';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Wrapper = TabNavigator({
  Home: {
    screen: HomeTab,
    path: '',
    navigationOptions: {
      tabBar: {
        icon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        )
      },
      header: {
        visible: false,
      },
    },
  },
  Chat: {
    screen: ChatPage,
    path: 'chat',
  },
  Recommend: {
    screen: RecommendPage,
    path: 'recommend',
  },
  My: {
    screen: MyPage,
    path: 'my',
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: '#62ab00',
    inactiveTintColor: '#666',
    showIcon: true,
    showLabel: false,
    style: {
      backgroundColor: '#f6f6f6',
    }
  }
});

export default Wrapper;