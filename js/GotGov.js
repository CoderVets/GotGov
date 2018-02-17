import React, { Component, } from 'react';
import { StackNavigator } from 'react-navigation';
import mainPage from './comps/mainPage'


const GotGov = StackNavigator({
    First: {
        screen: mainPage,
        navigationOptions: {
        title: null,
        header: null,
        }
    },
/// Second: {
///    screen: GoogleCivicAPI,
///    navigationOptions: {
///    title: null,
///    header: null,
///    }
/// } 
});

export default GotGov;
