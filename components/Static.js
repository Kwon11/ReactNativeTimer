import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export class StaticTopBar extends Component {
  constructor () {
    super();
    this.state = {};
  }
  render () {
    return (
        <View style={styles.Static}>
          <Image source={require('../img/topBar.jpg')} resizeMode='stretch' />
        </View>
      );
  }
}

export class StaticBottomBar extends Component {
  constructor () {
    super();
    this.state = {};
  }
  render () {
    return (
        <View style={styles.Static}>
          <Image source={require('../img/bottomBar.jpg')} resizeMode='stretch' />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  Static: { //top and bottom same css
    flex: 1,
    backgroundColor: '#FFFFFF',  //white
    alignContent: 'center'
  },
  TextCenter: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  }
})