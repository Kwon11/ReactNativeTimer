import React, {Component} from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

class Timer extends Component {
  constructor(props) {
    super();
    this.state = {
      time: props.time,
      name: props.name
    };
    this.countDown = this.countDown.bind(this);
    this.countDown();
  }

  countDown() {
    if (this.state.time === 0) {
      this.setState({time: 'DONE'})
    } else {
      this.setState({time: (this.state.time - 1)});
      setTimeout(() => this.countDown(), 1000);
    }
  }
  
  render () {
    return (
        <View>
          <Text>{this.state.name}</Text>
          <Text>{this.state.time}</Text>
        </View>
      )
  }
}

export default class TimersView extends Component {
  constructor(props) {
    super();
    this.list = [<Timer name={'timer1'} time={100} key='lol' />]
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
    backgroundColor: '#4800FF' //blue
  }
})
