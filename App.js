import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DayTemp from './dayTemp';
import weatherInfo from './weatherInfo';

export default class App extends React.Component {
    constructor(props){
        super(props);

        // this.days = [];

        this.state = {
            weatherDescription: null,
            humidity: null,
            wind: null
        }
    }

    componentWillMount(){
        //set the state of the weather description
        // this.findWeather();
    }

    findWeather() {
        const apikey = '71043c8b60e60a460020f46b78c6850c';
        const path = `https://api.darksky.net/forecast/71043c8b60e60a460020f46b78c6850c/37.8267,-122.4233`;
        fetch(path)
        .then(res => res.json())
        .then((json) => {
            // console.log(json);
            // if (json.cod === 200){
                const description = json.weather[0].main;
                const weatherHumidity = json.main.humidity;
                const windValue = json.wind.speed;
                this.setState({weatherDescription: description, humidity: weatherHumidity, wind: windValue});
        })
        .catch(err => console.log(err));
    }
    //display the weather description if it is not null
    showWeather(){
        if (this.state.weatherDescription){
            return (
                [
                <Text key = "description" style= {styles.weatherDescription}>{this.state.weatherDescription}</Text>,
                <Text key = "humidity" style= {styles.weatherDescription}>Humidity: {this.state.humidity}%</Text>,
                <Text key = "wind" style= {styles.weatherDescription}>Wind: {this.state.wind}</Text>
                ]
            )

        }else{
            return <Text style= {styles.weatherDescription}>{''}</Text>
        }
    }



    render() {
        //Update Day
        const days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
        const date = new Date();
        const dayNumber = date.getDay();
        const day = days[dayNumber];

        //Update Month
        var months = new Array();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
        const monthNumber = date.getMonth();
        const month = months[monthNumber];

        // utc -> new Date(utc * 1000)

        //Update Month
        const weatherArray = ["70˚", "70˚", "64˚", "72˚", "72˚", "69˚", "63˚"];
        const currentWeather = weatherArray[dayNumber];

        //get all of the days/temperatures components in an array
        const listDaysTemp = () => {
            return days.map((day, index) => {
                return <DayTemp key = {index} valueDay = {days[index]} valueWeather = {weatherArray[index]} />
            })
        }

        return (
            <View style= {styles.container}>
                <Text style= {styles.state}>San Francisco</Text>
                <Text style= {styles.date}>{day}, {month} {dayNumber + 1}</Text>
                <Text style= {styles.currentWeather}>{currentWeather}</Text>

                <View style= {styles.weatherContainer}>
                    {this.showWeather()}
                </View>

                {/* REACT COMMENT */}
                <View style= {styles.dayContainer}>
                    {listDaysTemp()}
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
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'gray'

    },
    state: {
        fontSize: 40,
        fontWeight: '300',
        paddingBottom: 5,
        // flex: 1
    },
    date:{
        fontSize: 25,
        fontWeight: '200',
        paddingBottom: 10,
        // flex: 1
    },
    dayTemp: {
        width: 50,
        height: 50
    },
    dayContainer: {
       flexDirection: 'row',
    },
    currentWeather: {
       fontSize: 90,
       paddingBottom: 5,
    //    flex: 1,
    //    backgroundColor: 'cyan'
    },
    weatherDescription: {
       fontSize: 18,
       paddingBottom: 10,
       fontWeight: '100',
       marginRight: 25
   },
   weatherContainer: {
       flexDirection: 'column',
       alignItems: 'center',
   }
});
