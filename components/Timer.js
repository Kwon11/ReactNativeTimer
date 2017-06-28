import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Timer extends Component {
  constructor(props) {
    super();
  }

  componentWillMount() {
    this.props.countDown(this.props.name); 
  }

  render () {
    return (
        <View>
          <Text>{this.props.name}</Text>
          <Text>{this.props.time}</Text>
        </View>
      )
  }
}

//call props.countDown(props.name);