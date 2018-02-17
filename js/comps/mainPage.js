import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image, Button, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation'
import { NavigationActions } from 'react-navigation'
import Header from './Header'

import AddressInput from './addressInput'



export default class mainPage extends Component{
  render() {
    const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>

          <Header headerText={'GotGov'}/>

          <AddressInput/>

          <TouchableOpacity onPress={() => navigate('Second')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Enter</Text>
                    </View>
          </TouchableOpacity>

        </View>

        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'white',
  },


  button: {
    height: 75,
    borderRadius: 0,
    marginTop: 260,
    marginBottom: 50,
    alignItems: 'center',
    backgroundColor: '#95A5A6',
    
   flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  buttonText: {
    padding: 25,
    color: 'white',
    fontSize: 30
  },

}
);