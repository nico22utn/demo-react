import React, { Component } from 'react';
import { View, Text, Alert, TouchableOpacity, StyleSheet, Image,FlatList } from 'react-native';
import {dataFlat,horizontalStatus} from './HorizontalFlatData';
import Icon from 'react-native-vector-icons/Ionicons';

class HorizontalFlatListItem extends Component{
    render(){
        return(
            <View style = {styles.horizontalItemStyle}>
                <TouchableOpacity
                    onPress = { () => {
                        alert(`You pressed ${this.props.item.hour}`)
                    }}
                    style = {styles.touchableStyle}>
                </TouchableOpacity>
                <Text style = { styles.textStyle }>{this.props.item.hour}</Text>
                <Icon name = {this.props.item.status.android} size= {30} color= 'white'/>
                <Text style = { styles.degreesStyle}>{this.props.item.degrees} °F</Text>
            </View>
        );
    }
}
export default class HorizontalFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.viewPrincipalStyle}>
            <View style = {styles.anotherStyle}>
                <Image style = {styles.imageStyle} source = {{
                    uri: "https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg"
                }}></Image>
            </View>
            <Text style = {{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
                backgroundColor: 'transparent',
                margin: 10,
            }}>
                Weather Forecast
            </Text>
            <View style = {styles.singleViewStyle}>
            <FlatList style = {styles.flatStyle} 
                horizontal = {true} data = {dataFlat} renderItem = {({item,index})=>{
                    return(
                        <HorizontalFlatListItem item = {item} index = {index} parentFlatList = {this}>
                        </HorizontalFlatListItem>
                    );
                }}
                keyExtractor = {(item,index) => item.hour}>
            </FlatList>
            </View>
      </View>
    );
  }
}
const styles = StyleSheet.create(
    {
        viewPrincipalStyle: {
            flex: 1,
            flexDirection: 'column',
            marginTop:  34,
        },
        imageStyle:{
            flex: 1,
            flexDirection: 'column',
            width: null,
            height: null,
            backgroundColor: 'transparent',
            justifyContent: 'center'
        },
        singleViewStyle:{
            height: 150,
            
        },
        anotherStyle: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        },
        flatStyle: {
            backgroundColor: 'black',
            opacity: 0.5
        },
        horizontalItemStyle:{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            width: 90,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'grey',
            margin: 4
        },
        textStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
            margin: 20
        },
        degreesStyle: {
            fontSize: 16,
            margin: 10,
            color: 'white'
        },
        touchableStyle:{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }   
    }
);