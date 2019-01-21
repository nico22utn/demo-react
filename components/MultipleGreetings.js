import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class MultipleGrettings extends Component {
  render() {
    return (
        <View
            style = { {alignItems: 'center'} }
        >
            <Greeting name="Primer props"/>
            <Greeting name="Segunda props"/>
        </View>
    )
  }
}

class Greeting extends Component {
    render(){
        let saludo = `Recibiendo props: ${this.props.name} `;
        return(
            <Text> {saludo}</Text>
        );
    }
}