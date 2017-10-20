//This component takes in a date, temperature, weather description, humidity and wind type
// It displays thise data in a weather. Export this file to react
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default WeatherInfo = (props) => {
    return (
        <View style = {styles.dayTemp}>
            <Text>Day</Text>
            <Text>Temperature</Text>

            <View style = {styles.weatherInfo}>
                <Text>Description</Text>
                <Text>Humidity</Text>
                <Text>Wind Type</Text>
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
        paddingTop: 50,
        width: '100%',
        backgroundColor: 'purple'
    },
    day: {
        fontSize: 20,
        fontWeight: '200',
        paddingBottom: 4
    },
    weather: {
        fontSize: 18,
        fontWeight: '400'
    },
    weatherInfo: {
        flexDirection: 'column'
    }
});