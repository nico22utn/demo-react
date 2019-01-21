import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

export default class HorizontalScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      let screenWidth = Dimensions.get('window').width;
      let screenHeight = Dimensions.get('window').height;
    return (
      <ScrollView horizontal = {true}>
          <View style = {{
              backgroundColor: '#5f9ea8',
              flex: 1,
              width: screenWidth,
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center'
          }}>

          </View>
      </ScrollView>
    );
  }
}
