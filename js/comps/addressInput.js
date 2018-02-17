import React, { Component } from 'react';
import { AppRegistry, TextInput, View } from 'react-native';

export default class AddressInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Address' };
  }

  render() {
    return (
      <View>

      <TextInput
      placeholder = 'Please enter your Address'
      keyboardType = 'default'
      onChangeText = {(text)=> this.onChanged(text)}
      value = {this.state.myAddress}
        
    style={{
      marginTop: 200,
      marginBottom: 20,
      height: 50,
      width:350, 
      borderColor: 'grey', 
      borderWidth: 3,
      borderRadius: 20,
      textAlign:'center',
      justifyContent: 'center',
      alignSelf: 'center',
      fontSize: 20,
      }}
    onChangeText={(text) => this.setState({myAddress: text})}
        
      />
      
      </View>
    );
  }
}


      
