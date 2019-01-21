import React, { Component } from 'react'
import { Text, View, ViewPagerAndroid, StyleSheet } from 'react-native'

export default class ViewPagerExample extends Component {
  render() {
    return (
      <ViewPagerAndroid 
        style = { styles.screenStyle } initialPage = {1}
        onPageScroll = { (event) => { 
            console.log(`Pantalla: ${event.nativeEvent.offset}`)
            }}
        onPageScrollStateChanged = {(state)=> {
            console.log(`State: ${state}`)
            }}
        onPageSelected = { (event)=>{
            console.log(`En página : ${event.nativeEvent.position}`)
            }}
        >
        <View style = {{ backgroundColor: 'lightseagreen'}}>
            <Text style = {styles.textStyle}>Screen 1</Text>
        </View>
        <View style = {{ backgroundColor: 'blue'}}>
            <Text style = {styles.textStyle}>Screen 2</Text>
        </View>
        <View style = {{ backgroundColor: 'red'}}>
            <Text style = {styles.textStyle}>Screen 3</Text>
        </View>
      </ViewPagerAndroid>
    )
  }
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,
        textAlign: 'center'
    },
    screenStyle: {
        flex: 1
    }
});