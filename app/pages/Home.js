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
import CityPage from '../pages/City';

import { StackNavigator, } from 'react-navigation';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Header navigation={this.props.navigation}/>
          </View>
        </ScrollView>
      </View>
    )
  }
};

const HomeTab = StackNavigator({
  Home: {
    screen: HomePage,
    path: '/',
    navigationOptions: {
      header: {
        visible: false,
      }
    }
  },
  City: {
    path: 'city',
    screen: CityPage,
  }
});

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
  },
  scrollView: {
    marginBottom: 1,
  }
});