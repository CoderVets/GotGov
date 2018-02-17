import React, { Component } from 'react';
import { WebView, View } from 'react-native';
import Header from './Header';
import addressInput from './addressInput';

export default class GoogleCivicAPI extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    }}>
      <Header headerText={'Reps'} />
         
      </View>
    )
var request = require('request');

var options = {
   url: ('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyA4cErjEnnOiGVvGHViWcl_sGXsM4CWdjI&address='+myAddress)
};

function callback(error, response, body) {
   if (!error && response.statusCode == 200) {
   console.log(body);
    }
}

request(options, callback);


    
 }
 }