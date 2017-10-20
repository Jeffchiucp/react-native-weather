import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default DayTemp = (props) => {
    return (
        <View style={styles.container}>
            <Text style= {styles.day}>{props.valueDay}</Text>
            <Text style= {styles.weather}>{props.valueWeather}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingRight: 10,
        alignItems: 'center'
    },
    day: {
        fontSize: 20,
        fontWeight: '200',
        paddingBottom: 4
    },
    weather: {
        fontSize: 18,
        fontWeight: '400'

    }
});
