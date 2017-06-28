/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
// import StaticTopBar from './components/StaticTopBar.jsx';
// import CustomTimerAdd from './components/CustomTimerAdd.jsx';
// import TimersView from './components/TimersView.jsx';
// import EditPreset from './components/EditPreset.jsx';
// import StaticBottomBar from './components/StaticBottomBar.jsx';


export default class PlexChatProject extends Component {

  constructor () {
    super();
    this.state = {
      inputTime: 0,
      timers: []
    }
    this.setTime = this.setTime.bind(this);
  }

  setTime () {

  }


  render() {
    return (
      <View style={styles.MainContainer}>

        <View style={styles.Static}>
          <Text>Knightly Nation</Text>
          <Text>Timers</Text>
        </View>

        <View style={addTimerStyles.AddTimer}>
          <View style={addTimerStyles.SideSpacer}></View>
          <TextInput onChangeText={(text) => this.setState({inputTime: text})}style={addTimerStyles.TimerInput} keyboardType='numeric' returnKeyType='done'></TextInput>
          <View style={addTimerStyles.CenterSpacer}></View>
          <TouchableOpacity onPress={()=> console.log(this.state.inputTime)} title='Start Timer' style={addTimerStyles.Button}>
            <Image source={require('./img/addTimerButton.jpg')} style={addTimerStyles.Img} resizeMode='stretch' />
          </TouchableOpacity>
          <View style={addTimerStyles.SideSpacer}></View>
        </View>

        <View style={styles.TimersView}>
          <ScrollView>
            <Text>Timers</Text>
            <Text>Timers</Text>
            <Text>Timers</Text>
            <Text>Timers</Text>
            <Text>Timers</Text>
            <Text>Timers</Text>
            <Text>Timers</Text>
            <Text>Timers</Text>
            <Text>Timers</Text>
            <Text>Timers</Text>
            <Text>Timers</Text>
          </ScrollView>
        </View>

        <View style={styles.EditTimersButton}>
          <Text>Edit Preset Timers</Text>
        </View>

        <View style={styles.Static}>
          <Text>Buttons for bottom static bar</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: { //the whole app
    flex: 1,
    backgroundColor: '#C6C6C6'
  },
  Static: { //top and bottom same css
    flex: 1,
    backgroundColor: '#FFFFFF',  //white
    alignContent: 'center'
  },
  TimersView: {
    flex: 6,
    backgroundColor: '#4800FF' //blue
  },
  EditTimersButton: {
    flex: 1.5,
    backgroundColor: '#FF0000'  //red  
  }
});

const addTimerStyles = StyleSheet.create({
  AddTimer: {
    flex: 1.5,
    flexDirection: 'row',
    backgroundColor: '#CBCBCB', //grey
    alignContent: 'center',
    justifyContent: 'space-around'
  },
  TimerInput: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    marginBottom: 10
  },
  Button: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,

  },
  CenterSpacer: {
    flex: 1
  },
  SideSpacer: {
    flex: .5
  },
  Img: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  }
})

AppRegistry.registerComponent('PlexChatProject', () => PlexChatProject);
