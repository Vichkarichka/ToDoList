import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class displayList extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
         const {list, onRemoveTodo} = this.props;
         const display = list.map((text, item) =>
             <TouchableOpacity key={item}
                 style={styles.item}
                 onPress={() => onRemoveTodo(item)}
             >
                 <Text>{text}</Text>
             </TouchableOpacity>
         );
        return(
            <View>
                {display}
            </View>
        );
    }
};

const styles = StyleSheet.create({
   item:{
       backgroundColor: 'lightsalmon',
       marginBottom: 5,
       padding: 15,
   },
});