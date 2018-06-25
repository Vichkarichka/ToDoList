import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import Header from "./Header";
import InputTODO from "./InputTODO";
import DisplayList from "./displayList";
import { add, remove } from './todoListRedux'
import { connect } from 'react-redux';

 class Index extends React.Component {

     onAddTodo = (text) => {
        this.props.add(text);
     };

     removeItem = (index) => {
        this.props.remove(index);
     };

    render() {
        return (
            <View>
                <Header header = "TO DO LIST"/>
                <InputTODO onSubmitEditing={this.onAddTodo}/>
                <DisplayList list = {this.props.todos} onRemoveTodo = {this.removeItem}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = (dispatch) => {
    return {
        add: (text) => dispatch(add(text)),
        remove: (index) => dispatch(remove(index)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
