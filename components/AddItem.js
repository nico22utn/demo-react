import React, { Component } from 'react';
import { View, StyleSheet , Dimensions, Text,TextInput } from 'react-native';
import Modal from 'react-native-modalbox';

var screen = Dimensions.get('window');
export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        newFoodName: '',
        newFoodDescription: ''
    };
  }
  showAddModal = () => {
    this.refs.myModal.open();
  }
  render() {
    return (
      <Modal 
        ref = {"myModal"}
        style= {{
            justifyContent: 'center', borderRadius: 20, shadowRadius: 10, width: screen.width -80, height: 280
        }} 
        position= 'center' 
        backdrop= {true} 
        onClosed= {()=>{
            alert("Modal cerrado")
        }}>
        <Text style = {styles.textStyle}>Nueva Comida</Text>
        <TextInput style = {styles.inputStyle} placeholder = "Ingrese nueva comida" value= {this.state.newFoodName}
            onChangeText = { (text) => this.setState({ newFoodName: text})}/>
        <TextInput style = {styles.inputStyle} placeholder = "Ingrese descripción" value= {this.state.newFoodDescription}
            onChangeText = { (text) => this.setState({ newFoodDescription: text})}/>

      </Modal>
    );
  }
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
        color: 'black'
    },
    inputStyle: {
        height: 40,
        borderBottomColor: 'gray',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1,
    }
})