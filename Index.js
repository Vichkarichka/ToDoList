import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import Header from "./Header";
import InputTODO from "./InputTODO";
import DisplayList from "./displayList";
import { actionCreators } from './todoListRedux'

export default class Index extends React.Component {

    state = {};

    componentWillMount() {

        const {store} = this.props;
        console.log(this.props);
        const {todos} = store.getState();
        this.setState({todos});

        this.unsubscribe = store.subscribe(() => {
            const {todos} = store.getState();
            this.setState({todos})
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    };

    onAddTodo = (text) => {
        const {store} = this.props;

        store.dispatch(actionCreators.add(text));
    };

    removeItem = (item) => {
        const {store} = this.props;

        store.dispatch(actionCreators.remove(item))
    };

    render() {
        return (
            <View>
                <Header header = "TO DO LIST"/>
                <InputTODO onSubmitEditing={this.onAddTodo}/>
                <DisplayList list = {this.state.todos} onRemoveTodo = {this.removeItem}/>
            </View>
        )
    }
}

