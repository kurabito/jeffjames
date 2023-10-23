<template>
    <div class="clear">
        <!-- <h2>Burien Time and Weather</h2> -->

        <div id="clock">
            <Clock />
        </div>

        <!-- <h3>Tomorrow.io Forecast</h3> -->
        <!-- <iframe title="Forecast" height="200" width="900" 
            style="border: none;"
            src="https://jeffjames.s3.us-west-2.amazonaws.com/weather.html">
        </iframe> -->
        <Forecast />

        <div id="current">
            <!-- <h3>Current Conditions from NOAA and EPA</h3> -->
            <!-- <div id="current-noaa">
                <h3>Conditions at SEA</h3>
                 <h4>{{ currentTemp }}&deg; F</h4>
                <h4>{{ currentWeather }}</h4>
                <span class="left">Wind Speed: {{ windSpeed }}</span><br />
                <span class="left">Wind Direction: {{ windDirection }}</span> -->
                <!-- <CurrentNOAA /> 
            </div> -->
            <iframe id="aqi" title="AQI" height="230" width="230"
                src="https://widget.airnow.gov/aq-dial-widget/?city=Seattle&state=WA&country=USA&transparent=true"
                style="border: none; border-radius: 25px;">
            </iframe>

            <iframe src="https://embed.waze.com/iframe?zoom=10&lat=47.45&lon=-122.3&ct=livemap" width="600" height="230" allowfullscreen></iframe>

            <!-- <AQI /> -->
        </div>

        <div class="spacer"></div>

    </div>
</template>

<script>

import Clock from './Clock.vue'
// import Axios from 'axios'
// import CurrentNOAA from './Weather/CurrentNOAA.vue'
// import AQI from './Weather/AQI.vue'
import Forecast from './Weather/Forecast.vue'

export default {
    name: 'Current',

    components: {
        Clock,
        // CurrentNOAA,
        // AQI,
        Forecast
    },

    methods: {
        setRefreshCurrent (interval) {
            setInterval(() => {
                location.reload(true)
            }, interval)
        },

        // updateWeather (interval) {
        //     setInterval(() => {
        //         // Axios
        //         //     .get('https://forecast.weather.gov/MapClick.php?lat=47.46551607542392&lon=-122.34916463265634&FcstType=json')
        //         //     .then(response => (this.noaaData = response.data,
        //         //         this.currentTemp = this.noaaData.currentobservation.Temp,
        //         //         this.currentWeather = this.noaaData.currentobservation.Weather,
        //         //         this.windSpeed = this.noaaData.currentobservation.Winds,
        //         //         this.windDirection = this.noaaData.currentobservation.Windd,
        //         //         this.periods = this.noaaData.time.startPeriodName.length));

        //         CurrentNOAA.updateWeather()
        //     }, interval)
        // }
    },

    data () {
        return {
            noaaData: null,
            currentTemp: null,
            currentWeather: null,
            windSpeed: null,
            windDirection: null,
            periods: null,
        }
    },

    // mounted() {
    //     // Axios
    //     //     .get('https://forecast.weather.gov/MapClick.php?lat=47.46551607542392&lon=-122.34916463265634&FcstType=json')
    //     //     .then(response => (this.noaaData = response.data,
    //     //         this.currentTemp = this.noaaData.currentobservation.Temp,
    //     //         this.currentWeather = this.noaaData.currentobservation.Weather,
    //     //         this.windSpeed = this.noaaData.currentobservation.Winds,
    //     //         this.windDirection = this.noaaData.currentobservation.Windd,
    //     //         this.periods = this.noaaData.time.startPeriodName.length));
    //     // this.setRefreshCurrent(60000)
    //     this.updateWeather(60000)
    // },
}

</script>

<style scoped>
    h3 {
        text-decoration: underline;
    }
    h4 {
        margin-top: auto;
        margin-bottom: auto;
    }
    #clock {
        /* float: left; */
        padding-top: 30px;
        height: 60px;
        font-size: 48px;
    }
    #current {
        width: max-content;
        margin: auto;
    }
    #current-noaa {
        float: left;
        margin-right: 50px;
        font-size: 24px;
    }
    #aqi {
        float: left;
    }
    #forecast {
        clear: both;
        float: none;
        /* margin: auto; */
        max-width: 600px;
    }
    .clear {
        clear: both;
    }
    .left {
        text-align: left;
    }
    .spacer {
        clear: both;
        height: 5px;
    }
</style>
