/**
 * Created by jiangyh on 17-3-28.
 */
import React, { Component } from 'react';

import {
  TabNavigator,
} from 'react-navigation';

import HomePage from '../pages/Home';
import ChatPage from '../pages/Chat';
import RecommendPage from '../pages/Recommend';
import MyPage from '../pages/My';

const Wrapper = TabNavigator({
  Home: {
    screen: HomePage,
    path: '',
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