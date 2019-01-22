import React, { Component } from 'react';
import { View, Text,FlatList, StyleSheet,Image, Alert,TouchableHighlight } from 'react-native';
import data from './FlatListData';
import Swipeout from 'react-native-swipeout';
import AddItem from './AddItem';
import EditItem from './EditItem';

class FlatListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0
        };
    }
    refreshFlatListItem = () => {
        this.setState(prevState => {
            return { numberOfRefresh: prevState.numberOfRefresh + 1 };
        });
    }
    render(){
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {

            },
            onOpen: (secId, rowId, direction) => {
                this.setState({
                    activeRowKey: this.props.item.key
                })
            },
            right: [
                {
                    onPress: () =>{
                        this.props.parentFlatList.refs.editItem.showEditModal(data[this.props.index],this);
                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert','Estás seguro de eliminar éste elemento?',[
                                {text: 'No', onPress: () => console.log("Operación cancelada"), style: 'cancel'},
                                {text: 'Yes', onPress: () => {
                                    data.splice(this.props.index,1);
                                    this.props.parentFlatList.refreshFlatList(deletingRow);
                                }},
                            ],
                            { cancelable: true}
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        }
        return(
            <Swipeout {...swipeSettings}>
                <View style = {{
                flex: 1,
                flexDirection: 'column',
                }}>
                <View style = {{
                    flex: 1,
                    flexDirection:  "row",
                    backgroundColor: this.props.index % 2 == 0 ? 'blue' : 'green'
                }}>
                    <View style = {{
                        flex: 1,
                        flexDirection: 'column'
                    }}>
                        <Image style = {{width: 35, height: 35}} source = {{uri: "https://www.365imagenesbonitas.com/wp-content/uploads/2017/12/lulworth-inglaterra.jpg"}}/>
                        <Text style = { styles.flatListItemStyle}>{this.props.item.name}</Text>
                        <Text style = { styles.flatListItemStyle}>{this.props.item.foodDescription}</Text>
                    </View>
                </View>
                <View style = {{
                    height: 1,
                    backgroundColor: 'white'
                }}>
                </View>
            </View>
            </Swipeout>
        );
    }
} 

export default class BasicFlatList extends Component {
    constructor(props){
        super(props);
        this.state = ({
            deletedRowKey: null
        })
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    refreshFlatList = (deletedKey) => {
        this.setState(prevState => {
            return { activeRowKey: deletedKey };
        });
        this.refs.myFlatList.scrollToEnd();
    }
    _onPressAdd (){
        this.refs.addItem.showAddModal();
    }
    render() {
        return (
        <View style = {{
            flex: 1,
            marginTop: 22
        }}>
            <View style = {{ backgroundColor: 'tomato', height: 64, justifyContent: 'flex-end', flexDirection: 'row'}}>
                <TouchableHighlight style = {{
                    marginRight: 10}} underlayColor= 'tomato' onPress= {this._onPressAdd}>
                    <Image style = {{width: 35, height: 35}} source = {{uri: "https://www.365imagenesbonitas.com/wp-content/uploads/2017/12/playa-maldivas.jpg"}}/>
                </TouchableHighlight>
            </View>
            <FlatList ref = {"myFlatList"} data = {data} renderItem = { ({item,index})=>{
                return(
                    <FlatListItem item = {item} index={index} parentFlatList = {this}></FlatListItem>
                );
            }}>
            </FlatList>
            <AddItem ref = {'addItem'} parentFlatList={this}>

            </AddItem>
            <EditItem ref = {'editItem'} parentFlatList={this}>

            </EditItem>
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