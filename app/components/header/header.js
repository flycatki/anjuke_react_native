/**
 * Created by jiangyh on 17-3-29.
 */
import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import px2dp from '../../util/util';

const headH = px2dp(45);
const InputHeight = px2dp(30);

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('City')}>
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}>大连</Text>
              <Icon name="md-arrow-dropdown" size={20} color="#fff" style={{marginLeft: 3}} />
            </View>
          </TouchableNativeFeedback>
          <View style={styles.searchContainer}>
            <Icon name="ios-search-outline" size={20} color="#666" />
            <Text style={styles.searchText}>挑好房，上安居客</Text>
            <Icon name="ios-qr-scanner-outline" size={20} color="#666" />
          </View>
          <View style={styles.mapContainer}>
            <Icon name="ios-map-outline" size={20} color="#fff" />
            <Text style={styles.mapText}>地图</Text>
          </View>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#62ab00',
    height: headH,
    paddingTop: px2dp(7),
  },
  headerWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationContainer: {
    flex: 1,
    height: InputHeight,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    fontSize: px2dp(14),
    color: "#fff"
  },
  searchContainer: {
    flex: 3,
    borderRadius: 2,
    height: InputHeight,
    flexDirection: "row",
    backgroundColor:"#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  searchText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 20,
    marginRight: 10,
  },
  mapContainer: {
    flex: 1,
    height: InputHeight,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  mapText: {
    fontSize: px2dp(14),
    color: "#fff",
    marginLeft: 5,
  }
});