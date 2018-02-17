
import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';
import Header from './Header'
export default class GoogleCivicAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyA4cErjEnnOiGVvGHViWcl_sGXsM4CWdjI&address=1263%20Pacific%20Ave.%20Kansas%20City%20KS')
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson)
        var len = responseJson.offices.length;
          for (var i = 0; i < len; i++){
              console.log(i);
              responseJson.offices[i].official = responseJson.officials[i];
          }
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.offices),
        }, function() {
            // console.log(this.state.dataSource.s1[0])
            // console.log(responseJson)
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
        
          <ActivityIndicator />

        </View>
      );
    }
console.log('DATASOURCE');
console.log(this.state.dataSource);
console.log(this.state.dataSource[0]);


    return (
      <View style={{flex: 1, paddingTop: 20}}>
      <Header headerText={'GotGov'}/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>
          {rowData.name}:  {rowData.official.name}
          
          
          </Text>}
        />
       
      </View>
    );
  }
}