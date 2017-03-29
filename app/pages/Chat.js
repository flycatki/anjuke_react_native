/**
 * Created by jiangyh on 17-3-29.
 */
import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ChatPage extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    tabBar: {
      icon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-text' : 'ios-text-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  };

  render() {
    return (
      <View>
        <Text>ChatPage</Text>
      </View>
    )
  }
}