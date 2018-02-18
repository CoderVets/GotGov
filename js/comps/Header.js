import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}> 
        <Image
        
      style={StyleSheet.absoluteFill}
      source={require('./test1.png')}
    />   
            <Text style={textStyle}>{props.headerText}</Text>
        </View>    
    );
};

const styles = {
    viewStyle: {
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2
    
    },
    textStyle: {
        paddingTop: 38,
        color: 'black',
        fontSize: 60,
        alignItems: 'center',
        fontWeight: ('bold'),
        
    },
    absoluteFill: {
        justifyContent: 'space-around',
        width: null,
        height: null,
        resizeMode: 'stretch',
        opacity: .1
    }
};

export default Header;