//Take either a current location or remote location and get the lat/lon coordinates
//Make a weather api request with those coordinates and get weather info for 5 days.
//weather info is date, temperature, weather description, humidity and wind type

//Fill weatherRow component with the weather info for those 5 days and store them in an array.
//Export this array to App.js and there, display the rows in a scroll view.
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Location extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weatherWeekObj = {null}
        }
    }
    //fetch the weather info for 5 days
    findWeather() {
        const apikey = '6c407087861910b3e50bd32e9989c59d';
        const path = `http://api.openweathermap.org/data/2.5/forecast?id=san+francisco&appid=${apikey}`;
        fetch(path)
        .then(res => res.json())
        .then((json) => {
            // console.log(json);
            if (json.cod === 200){
                const description = json.weather[0].main;
                const weatherHumidity = json.main.humidity;
                const windValue = json.wind.speed;
                if (windValue < 5.0){
                    windValue = "Calm";
                }
                if (windValue > 5.0 && windValue < 15.0){
                    windValue = "Moderate";
                }
                if (windValue > 15.0){
                    windValue = "Extreme";
                }
                console.log(description);
                console.log(weatherHumidity);
                console.log(windValue);
                this.setState({weatherDescription: description, humidity: weatherHumidity, wind: windValue});
            }else{
                console.log("not status 200");
                this.setState({weatherDescription: null});
            }
        })
        .catch(err => console.log(err));
    }


    render() {
        return (


        )
    }
}