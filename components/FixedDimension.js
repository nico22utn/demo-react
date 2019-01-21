import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FixexDimension extends Component {
  
  render() {
    return (
        <View style = { {flex: 1} }>
            <View style = { {width: 100, height: 200, backgroundColor: 'blue'}}></View>
        </View>
    );
  }
}
