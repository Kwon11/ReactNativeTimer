import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class CustomTimerAdd extends Component {
  constructor(props) {
    super(props);
    this.state ={
      inputTime: 0,
      inputName: ''
    };
  }
  render () {
    return (
        <View style={addTimerStyles.AddTimer}>
          <View style={addTimerStyles.SideSpacer}></View>
          <TextInput onChangeText={(text) => this.setState({inputTime: text})}style={addTimerStyles.TimerInput} keyboardType='numeric' returnKeyType='done'></TextInput>
          <View style={addTimerStyles.CenterSpacer}></View>
          <TextInput onChangeText={(text) => this.setState({inputName: text})} style={addTimerStyles.NameInput} returnKeyType='done'></TextInput>
          <View style={addTimerStyles.CenterSpacer}></View>
          <TouchableOpacity onPress={()=> this.props.addTimer(this.state.inputName, this.state.inputTime)} title='Start Timer' style={addTimerStyles.Button}>
            <Image source={require('../img/addTimerButton.jpg')} style={addTimerStyles.Img} resizeMode='stretch' />
          </TouchableOpacity>
          <View style={addTimerStyles.SideSpacer}></View>
        </View>
      );
  }
}

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
    marginBottom: 10
  },
  NameInput: {
    flex: 2,
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    marginBottom: 10
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