import React, { Component } from "react";
import { ActivityIndicator, ListView, Text, View, StyleSheet, ImageBackground } from "react-native";
import Header from "./Header";
import AddressInput from "./addressInput";
import RNFS from "react-native-fs";
var customData = require('../../stuff.json');

export default class GoogleCivicAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    var address2 = "63366";
    return fetch(
      "https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyA4cErjEnnOiGVvGHViWcl_sGXsM4CWdjI&address=" +
        address2
    )
      .then(response => response.json())
      .then(responseJson => {
        var len = responseJson.offices.length;
        for (var i = 0; i < len; i++) {
          // console.log(i);
          responseJson.offices[i].official = responseJson.officials[i];
        }
        let ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
        var path = RNFS.DocumentDirectoryPath + "/stuff.json";
        responseJson.offices2 = JSON.stringify(responseJson.offices);
        // RNFS.writeFile(path, "Lorem ipsum dolor sit amet", "utf8")
        /*RNFS.writeFile(path, responseJson.offices2, "utf8")
          .then(success => {
            console.log("FILE WRITTEN!");
          })
          .catch(err => {
            console.log(err.message);
          });*/
        // console.log("stuff");
        this.setState(
          {
            isLoading: false,
            // dataSource: ds.cloneWithRows(responseJson.offices)
            dataSource: ds.cloneWithRows(customData)
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Header headerText={"GotGov"} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => (
            <Text
            style={styles.text}
            >
              {rowData.name}: {rowData.official.name}
            </Text>
          )}
        />
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    paddingTop: 2,
    textAlign: 'center',
    marginTop: 50,
  },

}
);