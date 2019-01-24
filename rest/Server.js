import React, { PureComponent } from 'react';
import { AppRegistry,View,Text,Alert,StyleSheet } from 'react-native';
const url = "http:/algunGet";
const urlPost = "http:/algunPost";
const urlPut = "http:/algunPUT";
async function getFoodsFromServe(){
    try{
        let response = await fetch(url);
        let responseJson = await response.json();
        return responseJson.data;
    } catch (error){
        console.log(`Error is ${error}`)
    }
}
async function insertFood(params){
    try{
        let response = await fetch(urlPost,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
        let responseJson = response.json();
        return responseJson;
    } catch(error){
        console.log(`Error is ${error}`)
    }
}
async function updateFood(params){
    try{
        let response = await fetch(urlPut,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json();
        return responseJson; 
    }
    catch(error){

    }
}
export {getFoodsFromServe};
export {insertFood};

//VISTA en el render

// Así sería la llamada desde una api a los servicios con un GET
// import {getFoodsFromServe} from './rest/Server'    
//     constructor(props){
//         super(props);
//         this.state = {
//             foodsFromServer: []
//         }
//     }

//     refreshDataFromServer = () =>{
//         getFoodsFromServe().then((foods)=>{
//             this.setState({
//                 foodsFromServer: foods
//             })
//         }).catch((error)=>{
//             this.setState({
//                 foodsFromServer: []
//             })
//         })
//     }

//Usando POST
// import {insertFood} from './rest/Server' 
// Dentro de algun boton, en el metodo onPress
    insertFood(newFood).then((result) => {
        if (result == 'ok') {
            //De la props, hago referencia al componente que tiene éste método para refrescar el flat
            this.props.parentFlatList.refreshDataFromServer();
        }
    })
//Usando PUT
// import {updateFood} from './rest/Server' 
    let updateFood = {
        //Construir objeto que se va a mandar al servidor
    }
    updateFood(updateFood).then((result) => {
        if (result == 'ok') {
            //De la props, hago referencia al componente que tiene éste método para refrescar el flat
            console.log("Genial, se actualizó");
            this.props.parentFlatList.refreshDataFromServer();
        }
    }).catch((error)=>{
        console.log(`Error is ${error}`)
    })