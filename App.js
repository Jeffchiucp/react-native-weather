import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import DayTemp from './components/dayTemp';
import WeatherRow from './components/weatherRow';
import LocationData from './components/location';
import SubmitCity from './components/search';

//source course from Mitchell Hudson tutorial on WTHR
export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            currentCity: null
        }
    }

    componentWillMount(){
        this.getCurrentLocation();
    }

    //get current location and set that to the location components unless someone submits a new city
    // use the Free Geo IP API to get the current address

    getCurrentLocation(){
        var url = 'https://freegeoip.net/json/';
        fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            // console.log(responseJson);
            this.setState({currentCity: responseJson.city});
          })
          .catch((error) => {
              console.error(error);
          });
    }

    setCity(city){
        if (city){
            console.log("set city is: " + city)
            this.setState({currentCity: city});
        }
    }

    //current city will not be null. if not null, pass in current city. then pass in user submitted city
    showState(){
        console.log("THE NEW CITY IS: " + this.state.currentCity);
        if (this.state.currentCity != null){
            console.log("THE NEW NEW CITY IS: " + this.state.currentCity);
            return (
                <View style= {styles.locationContainer}>
                    <LocationData currentCity={this.state.currentCity}/>
                </View>
            )
        }
    }

    showSubmitForm(){
        if (this.state.currentCity != null){
            return (
                <SubmitCity onSubmit={(term) => {
                    console.log("the new city is: ", term);
                    this.setCity(term);
                }} />
            )
        }
    }

    render() {

        // pass city into location component as prop
        return (
            <View style= {styles.container}>
                <View style= {styles.cityContainer}>
                    {this.showSubmitForm()}
                </View>

                {this.showState()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100%',
    },

    cityContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '20%',
    },

    locationContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '80%',
    },
    state: {
        fontSize: 40,
        fontWeight: '300',
        paddingBottom: 5,
    },
    date:{
        fontSize: 25,
        fontWeight: '200',
        paddingBottom: 10,
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

//
// <View style= {styles.dayContainer}>
//     {listDaysTemp()}
// </View>
