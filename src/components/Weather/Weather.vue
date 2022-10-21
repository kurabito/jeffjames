<template>
    <div class="clear">
        <h2>Burien Weather</h2>

            <!-- <a class="weatherwidget-io" href="https://forecast7.com/en/47d61n122d33/seattle/?unit=us" data-label_1="SEATTLE"
                data-label_2="WEATHER" data-theme="original"></a> -->

            <!-- <div id="ww_4a94d603a1e85" v='1.20' loc='id' a='{"t":"responsive","lang":"en","ids":["wl3620"],"cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","sl_tof":"7","sl_sot":"fahrenheit","sl_ics":"one_a","font":"Arial"}'>Weather Data Source: <a href="https://sharpweather.com/weather_seattle/" id="ww_4a94d603a1e85_u" target="_blank">sharpweather.com/weather_seattle/</a></div><script async src="https://srv1.weatherwidget.org/js/?id=ww_4a94d603a1e85"></script> -->

        <div id="current">
            <h3>Current Conditions from NOAA and EPA</h3>
            <div id="current-noaa">
                <!-- {{ forecast.creationDate }} -->
                <h4>{{ currentTemp }}&deg; F</h4>
                <h4>{{ currentWeather }}</h4>
                <span class="left">Wind Speed: {{ windSpeed }}</span><br />
                <span class="left">Wind Direction: {{ windDirection }}</span>
                <!-- {{ forecast.data.hazard }} -->
                <!-- {{ forecast.currentobservation.Weather }} -->
            </div>
            <iframe id="aqi" title="AQI" height="230" width="230"
                src="https://widget.airnow.gov/aq-dial-widget/?city=Seattle&state=WA&country=USA&transparent=true"
                style="border: none; border-radius: 25px;">
            </iframe>
        </div>

        <div class="spacer"></div>

        <div id="forecast">
            <h3>NOAA Forecast</h3>
            <div v-for="n in periods" :key="n">
                <Period :name="noaaData.time.startPeriodName[n-1]" :imageUrl="noaaData.data.iconLink[n-1]"
                    :forecastText="noaaData.data.text[n-1]"></Period>
            </div>
        </div>
        
        <div class="spacer"></div>

        <h3>Tomorrow.io Forecast</h3>
        <iframe title="Forecast" height="200" width="1200" 
            style="border: none;"
            src="https://jeffjames.s3.us-west-2.amazonaws.com/weather.html">
        </iframe>

        <!-- <iframe title="Forecast" height="200" width="1200" 
            style="border: none;"
            src="https://forecast.weather.gov/MapClick.php?lon=-122.36193&lat=47.46077#.YyE83nbMLIV">
        </iframe> -->
    </div>
</template>

<script>

import Axios from 'axios'
import Period from './Period.vue'

export default {
    name: 'Weather',

    components: {
        Period
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
        Axios
            .get('https://forecast.weather.gov/MapClick.php?lat=47.46551607542392&lon=-122.34916463265634&FcstType=json')
            .then(response => (this.noaaData = response.data,
                this.currentTemp = this.noaaData.currentobservation.Temp,
                this.currentWeather = this.noaaData.currentobservation.Weather,
                this.windSpeed = this.noaaData.currentobservation.Winds,
                this.windDirection = this.noaaData.currentobservation.Windd,
                this.periods = this.noaaData.time.startPeriodName.length));
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
    #current {
        width: max-content;
        margin: auto;
    }
    #current-noaa {
        float: left;
        margin-right: 50px;
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
    /* #period {
        float: left;
        width: 100%;
        margin-bottom: 5px;
    } */
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
