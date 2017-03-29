/**
 * Created by jiangyh on 17-3-29.
 */
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import Header from '../components/header/header';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    tabBar: {
      icon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Header/>
          </View>
        </ScrollView>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
  },
  scrollView: {
    marginBottom: 1,
  }
});