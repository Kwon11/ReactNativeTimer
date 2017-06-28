import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class StaticTopBar extends Component {
  constructor () {
    super();
    this.state = {};
  }
  render () {
    return (
        <View style={styles.Static}>
          <Text style={styles.TextCenter}>Knightly Nation</Text>
          <Text style={styles.TextCenter}>Timers</Text>
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
          <Text>Buttons for bottom static bar</Text>
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
    textAlign: 'center'
  }
})