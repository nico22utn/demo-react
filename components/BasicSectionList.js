import React, { Component } from 'react'
import { Text, StyleSheet , View, SectionList } from 'react-native'
import { sectionListData } from './SectionListData';

class SectionHeader extends Component{
    render(){
        return(
            <View style = {styles.headerViewFirstStyle}>
                <Text style = {styles.headerTextFirstStyle}>{this.props.section.title}</Text>
            </View>
        );
    }
}
class SectionListItem extends Component{
    render(){
        return(
            <View style = { styles.itemFirstView}>
                <Text style = {styles.itemFirstText}>
                    {this.props.item.name}
                </Text>
                <Text style = {styles.itemFirstText}>
                    {this.props.item.description}
                </Text>
                <View style = {styles.separator} >

                </View>
            </View>
        );
    }
}

export default class  extends Component {
  render() {
    return (
      <View style = {styles.firstView}>
          <SectionList
            renderItem = { ({item,index}) =>{
                return(
                    <SectionListItem item = {item} index = {index}></SectionListItem>
                );
            }}
            renderSectionHeader = { ({section}) => {
                return (
                    <SectionHeader section = {section}></SectionHeader>
                );
            }}
            sections = {sectionListData}
            keyExtractor = {(item,index)=> item.name}>

          </SectionList>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    firstView: {
        flex: 1,
        marginTop: 22,
    },
    itemFirstView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(98,197,184)'
    },
    itemFirstText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgb(173,252,250)',
        marginLeft: 20,
        marginRight: 10,
    },
    headerViewFirstStyle: {
        flex: 1,
        backgroundColor: 'rgb(77,128,140)'
    },
    headerTextFirstStyle : {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        margin: 20
    },
    separator: {
        backgroundColor: 'rgb(77,120,140)',
        height: 1,
        margin: 4,
        marginLeft: 20,
        marginRight: 10
    }
});