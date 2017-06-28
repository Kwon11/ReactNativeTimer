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
      inputName: ''
    }
  }


  render() {
    return (
      <View style={styles.MainContainer}>

        <StaticTopBar />

        <CustomTimerAdd />

        <TimersView />

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
