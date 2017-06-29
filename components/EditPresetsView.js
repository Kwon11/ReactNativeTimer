import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class EditPreset extends Component {
  render () {
    return (
        <View style={styles.EditTimersButton}>
          <Button title="Edit Presets" onPress={() => console.log()} />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  EditTimersButton: {
    flex: .5,
    backgroundColor: '#CBCBCB'  //red  
  }
})