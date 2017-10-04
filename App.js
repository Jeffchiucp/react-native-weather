
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DayTemp from './dayTemp';

export default class App extends React.Component {
    render() {
        //Update Day
        const days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
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

        //Update Month
        const weatherArray = ["77˚", "75˚", "74˚", "74˚", "70˚", "79˚", "73˚"];
        const currentWeather = weatherArray[dayNumber];
        //function we implement in the class
        const listDays = () => {
            return days.map((day, index) => {
                return <DayTemp key = {index} valueDay = {days[index]} valueWeather = {weatherArray[index]} />
            })
        }

        return (
            <View style= {styles.container}>
                <Text style= {styles.state}>San Francisco</Text>
                <Text style= {styles.date}>{day}, {month} {dayNumber + 1}</Text>
                <Text style= {styles.currentWeather}>{currentWeather}</Text>

                <View style= {styles.dayContainer}>
                    {listDays()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: '100%',
      backgroundColor: '#D3D3D3'
    },
    state: {
        fontSize: 40,
        fontWeight: '300',
        paddingBottom: 5
    },
    date:{
        fontSize: 30,
        fontWeight: '200',
        paddingBottom: 10
    },
    dayTemp: {
        width: 50,
        height: 50
    },
    dayContainer: {
      flexDirection: 'row',
    },
    currentWeather: {
      fontSize: 60,
      paddingBottom: 5
    }

});