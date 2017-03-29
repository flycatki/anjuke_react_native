/**
 * Created by jiangyh on 17-3-28.
 */
import React, { Component } from 'react';

import {
  View,
  Text,
} from 'react-native';

export default class Wrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>wrapper</Text>
      </View>
    )
  }
}