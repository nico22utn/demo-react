import React, { Component } from 'react';
import { View, Text,FlatList } from 'react-native';
import data from './FlatListData';

export default class BasicFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {{
          flex: 1,
          marginTop: 22
      }}>
        <FlatList data = {data} renderItem = { ({item,index})=>{
            console.log(`Item: ${item} and index: ${index}`)
        }}>

        </FlatList>
      </View>
    );
  }
}
