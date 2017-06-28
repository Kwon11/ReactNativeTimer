import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class EditPreset extends Component {
  render () {
    return (
        <View style={styles.EditTimersButton}>
          <Text>Edit Preset Timers</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  EditTimersButton: {
    flex: 1.5,
    backgroundColor: '#FF0000'  //red  
  }
})