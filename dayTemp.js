import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DayTemp extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View>
                <Text>{this.props.days}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    state: {
        fontSize: 40,
        fontWeight: '300',
    },
    date:{
        fontSize: 20,
        fontWeight: '200',
    }

});
