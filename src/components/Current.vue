<template>
    <div class="clear">
        <!-- <h2>Burien Time and Weather</h2> -->

        <div id="clock">
            <Clock />
        </div>

        <div id="current">
            <!-- <h3>Current Conditions from NOAA and EPA</h3> -->
            <div id="current-noaa">
                <h4>{{ currentTemp }}&deg; F</h4>
                <h4>{{ currentWeather }}</h4>
                <span class="left">Wind Speed: {{ windSpeed }}</span><br />
                <span class="left">Wind Direction: {{ windDirection }}</span>
            </div>
            <iframe id="aqi" title="AQI" height="230" width="230"
                src="https://widget.airnow.gov/aq-dial-widget/?city=Seattle&state=WA&country=USA&transparent=true"
                style="border: none; border-radius: 25px;">
            </iframe>
        </div>

        <div class="spacer"></div>

        <!-- <div id="forecast">
            <h3>NOAA Forecast</h3>
            <div v-for="n in periods" :key="n">
                <Period :name="noaaData.time.startPeriodName[n-1]" :imageUrl="noaaData.data.iconLink[n-1]"
                    :forecastText="noaaData.data.text[n-1]"></Period>
            </div>
        </div> -->

        <div class="spacer"></div>

        <!-- <h3>Tomorrow.io Forecast</h3> -->
        <iframe title="Forecast" height="200" width="1200" 
            style="border: none;"
            src="https://jeffjames.s3.us-west-2.amazonaws.com/weather.html">
        </iframe>
    </div>
</template>

<script>

// import App from '../App.vue'
import Clock from './Clock.vue'
import Axios from 'axios'
// import Period from './Period.vue'

export default {
    name: 'Current',

    components: {
        Clock,
        // Period
    },

    methods: {
        setRefreshCurrent (interval) {
            setInterval(() => {
                location.reload(true)
            }, interval)
        },

        updateWeather (interval) {
            setInterval(() => {
                Axios
                    .get('https://forecast.weather.gov/MapClick.php?lat=47.46551607542392&lon=-122.34916463265634&FcstType=json')
                    .then(response => (this.noaaData = response.data,
                        this.currentTemp = this.noaaData.currentobservation.Temp,
                        this.currentWeather = this.noaaData.currentobservation.Weather,
                        this.windSpeed = this.noaaData.currentobservation.Winds,
                        this.windDirection = this.noaaData.currentobservation.Windd,
                        this.periods = this.noaaData.time.startPeriodName.length));
            }, interval)
        }
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

    mounted() {
        // Axios
        //     .get('https://forecast.weather.gov/MapClick.php?lat=47.46551607542392&lon=-122.34916463265634&FcstType=json')
        //     .then(response => (this.noaaData = response.data,
        //         this.currentTemp = this.noaaData.currentobservation.Temp,
        //         this.currentWeather = this.noaaData.currentobservation.Weather,
        //         this.windSpeed = this.noaaData.currentobservation.Winds,
        //         this.windDirection = this.noaaData.currentobservation.Windd,
        //         this.periods = this.noaaData.time.startPeriodName.length));
        // this.setRefreshCurrent(60000)
        this.updateWeather(60000)
    },
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
        height: 100px;
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
        margin: auto;
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
        height: 20px;
    }
</style>
