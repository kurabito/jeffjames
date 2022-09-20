<template>
    <div class="clear">
        <h2>Burien Weather</h2>

        <!-- <a class="weatherwidget-io" href="https://forecast7.com/en/47d61n122d33/seattle/?unit=us" data-label_1="SEATTLE"
            data-label_2="WEATHER" data-theme="original"></a> -->


<!-- <div id="ww_4a94d603a1e85" v='1.20' loc='id' a='{"t":"responsive","lang":"en","ids":["wl3620"],"cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","sl_tof":"7","sl_sot":"fahrenheit","sl_ics":"one_a","font":"Arial"}'>Weather Data Source: <a href="https://sharpweather.com/weather_seattle/" id="ww_4a94d603a1e85_u" target="_blank">sharpweather.com/weather_seattle/</a></div><script async src="https://srv1.weatherwidget.org/js/?id=ww_4a94d603a1e85"></script> -->

        <iframe title="Forecast" height="200" width="1200" 
            style="border: none;"
            src="https://jeffjames.s3.us-west-2.amazonaws.com/weather.html">
        </iframe>

        <iframe title="Forecast" height="200" width="1200" 
            style="border: none;"
            src="https://forecast.weather.gov/MapClick.php?lon=-122.36193&lat=47.46077#.YyE83nbMLIV">
        </iframe>

        <iframe title="AQI" height="340" width="230"
            src="https://widget.airnow.gov/aq-dial-widget/?city=Seattle&state=WA&country=USA&transparent=true"
            style="border: none; border-radius: 25px;">
        </iframe>
    </div>
    <div>
        forecast: {{ forecast }}
    </div>
    <!-- <div>
        forecastObj: {{ forecastObj }}
    </div>
    <div>
        forecastString: {{ forecastString }}
    </div> -->
    <!-- <div>
        location: {{ location }}
    </div> -->
    <!-- <div>
        periods: {{ startPeriodName }}
        <ul>
            <li v-for="item in startPeriodName" :key="item">
                {{ item }}
            </li>
        </ul>
    </div> -->
    <!-- <div>
        by index: {{ startPeriodName[1] }}
    </div> -->
    <div>
        <span v-for="n in periods" :key="n"> 
            {{ forecast.time.startPeriodName[n-1] }}
            <!-- {{ forecast.data.weather[n-1] }} -->
            {{ forecast.data.text[n-1] }} 
            <img :src=forecast.data.iconLink[n-1] />
            <!-- {{ weather[n-1] }}  -->
            <br />
        </span>
    </div>
</template>

<script>

// const host = location.hostname;

// WeatherWidget.io

    // !function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'weatherwidget-io-js');

    // function displayForecast1(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js'; fjs.parentNode.insertBefore(js, fjs); } }

// function displayForecast2 (d, s, id) {
//     console.log("In displayForecast2");
//     if (d.getElementById(id)) {
//         if (window.__TOMORROW__) {
//             window.__TOMORROW__.renderWidget();
//         }
//         return;
//     }
//     const fjs = d.getElementsByTagName(s)[0];
//     const js = d.createElement(s);
//     js.id = id;
//     js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

//     fjs.parentNode.insertBefore(js, fjs);
// }

// displayForecast2(document, 'script', 'tomorrow-sdk')

import Axios from 'axios'

export default {
    name: 'Weather',

    data () {
        return {
            forecast: null,
            periods: null,
            // forecastObj: null,
            // forecastString: null,
            // location: null,
            // startPeriodName: [],
                // weather: []
        }
    },

    mounted() {
        // displayForecast2(document, 'script', 'tomorrow-sdk');
        // this.$forceUpdate();
        // this.location.reload();
        Axios
            // .get('https://forecast.weather.gov/MapClick.php?lat=47.46551607542392&lon=-122.34916463265634&FcstType=json&callback=jsonCallback')
            .get('https://forecast.weather.gov/MapClick.php?lat=47.46551607542392&lon=-122.34916463265634&FcstType=json')
            .then(response => (this.forecast = response.data,
                // this.location = this.forecast.data.location,
                // this.startPeriodName = this.forecast.data.time.startPeriodName,
                // this.weather = this.forecast.data.data.weather
                this.periods = this.forecast.time.startPeriodName.length));

        // this.forecastObj = this.forecast.region;
        // this.forecastObj = this.forecast.region;
        // this.forecastString = JSON.stringify(this.forecastObj);
        // let localObj = JSON.parse(this.forecast)
        // let localJson = '{"region": "PNW", "x": "y"}'
        // let localObj = JSON.parse(localJson)
        // let localObj = JSON.parse(this.forecast);
        // this.location = localObj.region;
        // this.location = this.forecast.region;
        
    },

    // updated() {
    //     displayForecast2(document, 'script', 'tomorrow-sdk')
    // },
}

</script>

<style>
.left {
    float: left;
}
.clear {
    clear: both;
}
</style>
