<template>
        <h4>{{ currentTemp }}&deg; F</h4>
        <h4>{{ currentWeather }}</h4>
        <span class="left">Wind Speed: {{ windSpeed }}</span><br />
        <span class="left">Wind Direction: {{ windDirection }}</span>
</template>

<script>
import Axios from 'axios'

export default {
    name: 'CurrentNOAA',

    methods: {
        getWeather () {
            Axios
                .get('https://forecast.weather.gov/MapClick.php?lat=47.46551607542392&lon=-122.34916463265634&FcstType=json')
                .then(response => (this.noaaData = response.data,
                    this.currentTemp = this.noaaData.currentobservation.Temp,
                    this.currentWeather = this.noaaData.currentobservation.Weather,
                    this.windSpeed = this.noaaData.currentobservation.Winds,
                    this.windDirection = this.noaaData.currentobservation.Windd,
                    this.periods = this.noaaData.time.startPeriodName.length));
        },

        updateWeather (interval) {
            setInterval(() => {
                this.getWeather()
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
        this.getWeather()
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
    .left {
        text-align: left;
    }
</style>
