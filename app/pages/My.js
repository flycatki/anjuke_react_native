/**
 * Created by jiangyh on 17-3-29.
 */
import React, { Component } from 'react';

import {
  Text,
  View
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class MyPage extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    tabBar: {
      icon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  };

  render () {
    return (
      <View>
        <Text>my page</Text>
      </View>
    )
  }
}