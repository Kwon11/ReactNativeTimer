import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Timer extends Component {
  constructor(props) {
    super();
  }

  componentWillMount() {
    this.props.countDown(this.props.name); 
  }

  render () {
    return (
        <View style={styles.Timer}>
          <View style={styles.Spacer}></View>
          <View style={styles.TimerContainer}>
            <Text style={styles.TimerName}>{this.props.name}</Text>
            <Text style={styles.TimerValue}>{this.props.time}</Text>
          </View>
            <Button onPress={()=> this.props.deleteTimer(this.props.name)} title='Remove' style={styles.Button} />
          <View style={styles.Spacer}></View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  Timer: {
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CBCBCB'
  },
  TimerContainer: {
    flex: 3
  },
  TimerName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  TimerValue: {
    fontSize: 25
  },
  Button: {
    flex: 1
  },
  Spacer: {
    flex: .25
  }
})

//call props.countDown(props.name);