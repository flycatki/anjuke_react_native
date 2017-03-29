/**
 * Created by jiangyh on 17-3-29.
 */
import React, { Component } from 'react';

import {
  Text,
  View
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class RecommendPage extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    tabBar: {
      icon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-ribbon' : 'ios-ribbon-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  };

  render () {
    return (
      <View>
        <Text>recommend page</Text>
      </View>
    )
  }
};