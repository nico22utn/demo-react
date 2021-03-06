import React, { Component } from 'react';
import { Button, StyleSheet , Dimensions, Text,TextInput } from 'react-native';
import Modal from 'react-native-modalbox';
import data from './FlatListData';

var screen = Dimensions.get('window');
export default class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        foodName: '',
        foodDescription: '',
        key: '',
        flatListItem: ''
    };
  }
  showEditModal = (foodEdit,itemFoddFromFlatList) => {
    this.setState({
        key: foodEdit.key,
        foodName: foodEdit.name,
        foodDescription: foodEdit.foodDescription,
        flatListItem: itemFoddFromFlatList
    })
    this.refs.myModal.open();
  }
  generatekey = (numeroChars) =>{
      return require('random-string')({length: numeroChars});
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
        <TextInput style = {styles.inputStyle} placeholder = "Ingrese nueva comida" value= {this.state.foodName}
            onChangeText = { (text) => this.setState({ foodName: text})}/>
        <TextInput style = {styles.inputStyle} placeholder = "Ingrese descripción" value= {this.state.foodDescription}
            onChangeText = { (text) => this.setState({ foodDescription: text})}/>
        <Button 
            title = "Guardar!"
            style = {styles.buttonStyle} 
            containerStyle = {styles.buttonContainerStyle}
            onPress = { ()=>{
                if(this.state.foodName.length == 0 || this.state.foodDescription.length == 0){
                    alert("Los campos están vacíos");
                    return;
                }
                let foundIndex = data.findIndex(item => this.state.key == item.key);
                if (foundIndex < 0){
                    return;
                }
                data[foundIndex].name = this.state.foodName;
                data[foundIndex].foodDescription = this.state.foodDescription;
                this.state.flatListItem.refreshFlatListItem();
                this.refs.myModal.close();
            }}>
            
        </Button>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
    buttonStyle:{
        fontSize: 18,
        color: 'white'
    },
    buttonContainerStyle: {
        padding: 8,
        marginLeft: 70,
        marginRight: 70,
        height: 40,
        borderRadius: 6,
        backgroundColor: 'mediumseagreen'
    },  
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