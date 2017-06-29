import React, {Component} from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Timer from './Timer.js';

export default class TimersView extends Component {
  constructor(props) {
    super();
    this.list = [];
    for (var key in props.timers) {
      this.list.push(
          <Timer countDown={props.countDown} name={key} time={props.timers[key]} key={key} />
        )
    }
  }

  componentWillReceiveProps(props) {
    this.list = [];
    for (var key in props.timers) {
      if (props.timers[key]) {
        this.list.push(
            <Timer deleteTimer={props.deleteTimer} countDown={props.countDown} name={key} time={props.timers[key]} key={key} />
          )
      }
    }
  }

  render () {
    return (
        <View style={styles.TimersView}>
          <ScrollView>
          {this.list}
          </ScrollView>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  TimersView: {
    flex: 6,
    backgroundColor: 'white' //blue
  }
})

//passdown countDown, name, and value
//props.timers = {
  //timer1: 10
//}