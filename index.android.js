/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import {StaticTopBar, StaticBottomBar} from './components/Static.js';
import CustomTimerAdd from './components/CustomTimerAdd.js';
import TimersView from './components/TimersView.js';
import EditPresetsView from './components/EditPresetsView.js';


export default class PlexChatProject extends Component {
  constructor () {
    super();
    this.state = {
      inputTime: 0,
      inputName: '',
      timers: {
        'Elixer Timer': 300,
        'Creep Respawn': 80,
        'Treasure Reset': 30,
        'Gold Respawn': 90,
        'PQ': 600
      }
    }
    this.countDown = this.countDown.bind(this);
    this.addTimer = this.addTimer.bind(this);
    this.deleteTimer = this.deleteTimer.bind(this);
  }

  addTimer(name, time) {
    let temp = {...this.state.timers};
    temp[name] = time;
    this.setState({timers: temp});
  }

  deleteTimer(name) {
    let temp = {...this.state.timers};
    delete temp[name];
    this.setState({timers: temp})
  }

  countDown(name) {
    if (this.state.timers[name] === 1 || this.state.timers[name] === 0) {
      let temp = {...this.state.timers}
      temp[name] = 'DONE';
      this.setState({timers: temp})
    } else {
      let temp = {...this.state.timers}
      temp[name] = temp[name] - 1;
      this.setState({timers: temp})
      setTimeout(() => this.countDown(name), 1000);
    }
  }

  render() {
    return (
      <View style={styles.MainContainer}>

        <StaticTopBar />

        <CustomTimerAdd addTimer={this.addTimer}/>

        <TimersView deleteTimer={this.deleteTimer} countDown={this.countDown} timers={this.state.timers}/>

        <EditPresetsView />

        <StaticBottomBar />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: { //the whole app
    flex: 1,
    backgroundColor: '#C6C6C6'
  }
});


AppRegistry.registerComponent('PlexChatProject', () => PlexChatProject);
