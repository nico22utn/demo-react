import React, { Component } from 'react';
import { View, Text,FlatList, StyleSheet } from 'react-native';
import data from './FlatListData';

class FlatListItem extends Component {
    render(){
        return(
            <View style = {{
                flex: 1,
                backgroundColor: this.props.index % 2 == 0 ? 'blue' : 'tomato'
            }}>
                <Text style = { styles.flatListItemStyle}>{this.props.item.name}</Text>
                <Text style = { styles.flatListItemStyle}>{this.props.item.foodDescription}</Text>
            </View>
        );
    }
} 

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
            return(
                <FlatListItem item = {item} index={index}></FlatListItem>
            );
        }}>

        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    flatListItemStyle: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    }
});