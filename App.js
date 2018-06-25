import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import Header from "./Header";
import InputTODO from "./InputTODO";
import DisplayList from "./displayList";

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            text: '',
            todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
        };
    }

    onAddTodo = (text) => {
        const {todos} = this.state;

        this.setState({
            todos: [text, ...todos],
        });
    };

    removeItem = (item) => {
      const {todos} = this.state;

      this.setState({
            todos: todos.filter((todo, i) => i !== item),
      });

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

