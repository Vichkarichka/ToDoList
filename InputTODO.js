import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export default class InputTODO extends  React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: "",
        };
    }

    onSubmitEditing = () =>{
        const {onSubmitEditing} = this.props;
        const {text} = this.state;

        if (!text) return;

        onSubmitEditing(text);
        this.setState({text: ''});
    };

    render() {
        return (
            <TextInput
                style={{ padding: 15, height: 50,}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                onSubmitEditing={this.onSubmitEditing}
            />
        )
    }
}