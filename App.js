import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DayTemp from './dayTemp';

export default class App extends React.Component {
    render() {
        //Update Day
        const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const date = new Date();
        const dayNumber = date.getDay();
        const day = days[dayNumber];

        //Update Month
        var months = new Array();
        months[0] = "January";
        months[1] = "February";
        months[2] = "March";
        months[3] = "April";
        months[4] = "May";
        months[5] = "June";
        months[6] = "July";
        months[7] = "August";
        months[8] = "September";
        months[9] = "October";
        months[10] = "November";
        months[11] = "December";
        const monthNumber = date.getMonth();
        const month = months[monthNumber];

        return (
            <View style= {styles.container}>
                <Text style= {styles.state}>San Francisco</Text>
                <Text style= {styles.date}>{day}, {month} {dayNumber + 1}</Text>
                <DayTemp days = {days} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
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
