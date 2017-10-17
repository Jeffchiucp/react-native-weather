// Take either a current location or remote location and get the lat/lon coordinates
// Make a weather api request with those coordinates and get weather info for 5 days.
// weather info is date, temperature, weather description, humidity and wind type
//
// Fill weatherRow component with the weather info for those 5 days and store them in an array.
// Export this array to App.js and there, display the rows in a scroll view.
import React from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingVie } from 'react-native';
import WeatherRow from './weatherRow';

var moment = require('moment');

export default class Location extends React.Component {
    constructor(props){
        super(props);

        this.current = moment();
        this.currentDay = this.current.format("DD");
        this.currentDayName = this.current.format("dddd");
        this.currentMonth = this.current.format("MMMM");

        this.state = {
            weatherJSON: null,
            weatherShow: null,
            currentCity: props.currentCity,
            trigger: false
        }
        console.log("THE CITY START IS: " + props.currentCity);
        // this.weatherJSON();
    }

    componentWillMount(){

    }
    convertDay(timeStamp) {
        const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday"];
        const testDate = new Date(timeStamp * 1000);
        const testDay = testDate.getDay();
        console.log("the test day is: " + testDay);
        console.log("the day ISSSSS: " + days[testDay]);
        return days[testDay]
    }

    //take weather json data and create the 7 weather components
    createWeatherComponents(weatherData){
        const days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
        const daysTimeStamp = weatherData //array of days [0 - 6]
        var weatherWeekObj = [];
        var weatherShow = [];
        //push weather components into weatherShow and when done, set state
        for (const [index, element] of days.entries()){
            var currentDay = daysTimeStamp[index];
            var currentDayTemp = Math.round(currentDay.temperatureHigh) + '˚';
            weatherShow.push(<WeatherRow key={index} day={this.convertDay(currentDay.time)} temp={currentDayTemp} description={currentDay.summary}/>);
            console.log("index: " + index);
            if (index == days.length - 1){
                console.log("we reached it");
                this.setState({weatherShow: weatherShow});
            }
        }
    }

    //take physical address and create lat/lon coordinates
    geoCode(address, callback){
        const city = address.split(' ').join('+');
        const geoCodeKey = 'AIzaSyDTz7r5lJisnMBK7AAHOFE_kM5RQ_aalpk';
        console.log("the city is: " + city);
        const query = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + city + '&key=' + geoCodeKey;
        fetch(query)
        .then(res => res.json())
        .then((json) => {
            console.log(json);
            console.log("lat: " + json.results[0].geometry.location.lat);
            console.log("lon: " + json.results[0].geometry.location.lng);
            const coordinates = {
                lat: json.results[0].geometry.location.lat,
                lon: json.results[0].geometry.location.lng
            }
            callback(coordinates);
        })
        .catch(err => console.log(err));
    }

    //get city and use that. either default or new city from input
    weatherJSON(){
        var address = this.props.currentCity; //set in constructor
        console.log("THE CURRENT CITY IS: " + address);
        this.geoCode(address, (coordinates) => {
            console.log("the coordinates are: " + coordinates.lat + ", " + coordinates.lon);
            const apikey = '71043c8b60e60a460020f46b78c6850c';
            // 42.3601,-71.0589
            const path = `https://api.darksky.net/forecast/71043c8b60e60a460020f46b78c6850c/${coordinates.lat},${coordinates.lon}`;
            console.log("it is fetching");
            fetch(path)
            .then(res => res.json())
            .then((json) => {
                // console.log(json);
                console.log(json.timezone);
                // console.log(json.daily.data);
                //set weather json and the current city. then call createWeatherComponents
                this.setState({weatherJSON: json.daily.data, currentCity: this.props.currentCity}, function(){
                    this.createWeatherComponents(this.state.weatherJSON);
                });
            })
            .catch(err => console.log(err));
        });
    }

    //if weatherShow is not null, return all of the components for display
    showWeather(){
        console.log("THE  WEATHER IS: " + this.state.weatherShow)
        if (this.state.weatherShow != null){
            return this.state.weatherShow;
        }else{
            console.log("THE SHOW WEATHER IS NULL: " + this.state.weatherShow)
            return <Text>{''}</Text>
        }
    }
    //this is the header data in large text at the top before the weather rows:
    //the current city, the current temp, etc
    showCurrentDateTemp(){
        console.log("this is reached");
        console.log("current day name: "  + this.currentDayName);
        console.log("current day name: "  + this.currentMonth);
        console.log("current day name: "  + this.currentDay);
        // console.log("THE CURRENT CITY THAT WE HAVE IS: " + this.props.currentCity)
        if (this.state.weatherJSON != null){
            console.log("THE CURRENT CITY THAT WE HAVE IS: " + this.props.currentCity)
            return (
                <View style= {styles.container}>
                    <Text style= {styles.state}>{this.props.currentCity}</Text>
                    <Text style= {styles.date}>{this.currentDayName}, {this.currentMonth} {this.currentDay}</Text>
                    <Text style= {styles.weatherDescription}>{this.state.weatherJSON[0].summary}</Text>
                    <Text style= {styles.currentWeather}>{Math.round(this.state.weatherJSON[0].temperatureHigh)}˚</Text>
                </View>
            )
        }else{
            return <Text>{''}</Text>
        }
    }


    render() {
        //in the beginning, this.props.currentCity will equal this.state.currentCity and
        //this.state.weatherJSON will be null so this will pass and this.weatherJson will
        //be called. This triggers all of the functions above. It will not be run when the DOM
        // renders again. If the user then changes the location, this function will be run.
        if (this.props.currentCity != this.state.currentCity || this.state.weatherJSON == null){
            console.log("prop city: " + this.props.currentCity);
            console.log("state city: " + this.state.currentCity);
            this.weatherJSON();
        }
        return (
            <View>
                {this.showCurrentDateTemp()}
                <ScrollView contentContainerStyle={style.center}>
                    {this.showWeather()}
                </ScrollView>
            </View>
        )
    }
}

const style = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});


const styles = StyleSheet.create({

    date:{
        fontSize: 25,
        fontWeight: '200',
        paddingBottom: 15,
    },
    dayTemp: {
        width: 50,
        height: 50
    },
    dayContainer: {
       flexDirection: 'row',
       color: "black",

    },
    currentWeather: {
       fontSize: 70,
       paddingBottom: 5,
    },
    weatherDescription: {
       fontSize: 18,
       paddingBottom: 10,
   },
   weatherContainer: {
       flexDirection: 'column',
       alignItems: 'center',
   }
});
