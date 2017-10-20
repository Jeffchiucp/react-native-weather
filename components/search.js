import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default class SubmitCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
        text: ''
    }
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type in a new city!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TouchableOpacity
              style = {styles.submitButton}
              onPress = {
                 () => this.props.onSubmit(this.state.text)
              }>
              <Text style = {styles.submitButtonText}> Submit </Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = {

    submitButton: {
        backgroundColor: 'black',
        width: 135,
        paddingLeft: 0,
        paddingTop: 10,
        borderRadius: 0,
        height: 40
     },

    submitButtonText:{
        color: 'gray'
    }
}

// <Text style={{padding: 10, fontSize: 42}}>
//   {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
// </Text>
