//This component takes in a date, temperature, weather description, humidity and wind type
// It displays thise data in a weatherRow. Export this weather row.
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default WeatherRow = (props) => {
    return (
        <View style = {styles.dayTemp}>
            <View  style = {styles.day}>
                <Text>{props.day}</Text>
            </View>
            <View style = {styles.temp}>
                <Text style = {styles.temp}>{props.temp}</Text>
            </View>
            <View style = {styles.description}>
                <Text style = {styles.description}>{props.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    dayTemp: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        paddingTop: 25,
        width: '100%',
        // backgroundColor: 'purple'
    },
    day: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        width: '20%',
        left: 20
        // backgroundColor: 'blue'
    },
    temp: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        width: '25%',
        // backgroundColor: 'green'
    },
    description: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        width: '70%',
        // backgroundColor: 'red'
    }
});
