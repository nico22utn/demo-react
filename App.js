import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import FixexDimension from './components/FixedDimension';
import HorizontalScrollView from './components/HorizontalScrollView';
import ViewPagerExample from './components/ViewPagerExample';
import BasicFlatList from './components/BasicFlatList';
import HorizontalFlatList from './components/HorizontalFlatList';
import BasicSectionList from './components/BasicSectionList';

export default class App extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;
    return (
            <BasicSectionList/>
        );
    }
}

// Esto debería ser para la app de Flat List
// return (
//     <BasicFlatList/>
// );
