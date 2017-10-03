import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  getDays() {
    const days = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];
    return days.map((day) => {
      return  <DayTemp day={days[index]} temp</Text>;
    });
  }
    render() {
    return (
      <View style={styles.container}>

        <Text style ={style.city}>San Francisco</Text>
              Open up App.js to start working on your app!</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  daysContainer: {
    width: "100%"
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

