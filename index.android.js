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
        timer1: 10,
        timer2: 5,
        timer3: 13
      }
    }
    this.countDown = this.countDown.bind(this);
  }


  countDown(name) {
    if (this.state.timers[name] === 1) {
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

        <CustomTimerAdd />

        <TimersView countDown={this.countDown} timers={this.state.timers}/>

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
