import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const {header} = this.props;
        return (
            <View>
                <View style = {style.overHeader}/>
                <View style = {style.header}>
                    <Text style = {style.title}>{header}</Text>
                </View>
            </View>
        )
    }

}

const style =  StyleSheet.create({
    header:{
        backgroundColor: 'salmon',
        padding: 10
    },
    title:{
        textAlign: 'center'
    },
    overHeader:{
        backgroundColor: 'darksalmon',
        padding: 15
    },
});
