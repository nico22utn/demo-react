import React, { Component } from 'react';
import { View, Text,FlatList, StyleSheet,Image, Alert } from 'react-native';
import data from './FlatListData';
import Swipeout from 'react-native-swipeout';

class FlatListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeRowKey: null
        };
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
                    <Image
                        source = {{uri: this.props.item.imageUrl}}
                        style = {{width: 100, height: 100, margin: 5}}
                    >
                    </Image>
                    <View style = {{
                        flex: 1,
                        flexDirection: 'column'
                    }}>
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
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    refreshFlatList = (deletedKey) => {
        this.setState(prevState => {
            return { activeRowKey: deletedKey };
        });
    }
  render() {
    return (
      <View style = {{
          flex: 1,
          marginTop: 22
      }}>
        <FlatList data = {data} renderItem = { ({item,index})=>{
            return(
                <FlatListItem item = {item} index={index} parentFlatList = {this}></FlatListItem>
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