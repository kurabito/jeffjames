<template>
    <div class="clear">
        <h2>Burien Weather</h2>

            <!-- <a class="weatherwidget-io" href="https://forecast7.com/en/47d61n122d33/seattle/?unit=us" data-label_1="SEATTLE"
                data-label_2="WEATHER" data-theme="original"></a> -->

            <!-- <div id="ww_4a94d603a1e85" v='1.20' loc='id' a='{"t":"responsive","lang":"en","ids":["wl3620"],"cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","sl_tof":"7","sl_sot":"fahrenheit","sl_ics":"one_a","font":"Arial"}'>Weather Data Source: <a href="https://sharpweather.com/weather_seattle/" id="ww_4a94d603a1e85_u" target="_blank">sharpweather.com/weather_seattle/</a></div><script async src="https://srv1.weatherwidget.org/js/?id=ww_4a94d603a1e85"></script> -->

            <div id="forecast">
                <div id="period" v-for="n in periods" :key="n">
                    <Period :name="forecast.time.startPeriodName[n-1]" :imageUrl="forecast.data.iconLink[n-1]"
                        :forecastText="forecast.data.text[n-1]"></Period>
                </div>
            </div>

        <iframe title="AQI" height="340" width="230"
            src="https://widget.airnow.gov/aq-dial-widget/?city=Seattle&state=WA&country=USA&transparent=true"
            style="border: none; border-radius: 25px;">
        </iframe>

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
            forecast: null,
            periods: null,
        }
    },

    mounted() {
        Axios
            .get('https://forecast.weather.gov/MapClick.php?lat=47.46551607542392&lon=-122.34916463265634&FcstType=json')
            .then(response => (this.forecast = response.data,
                this.periods = this.forecast.time.startPeriodName.length));
    },
}

</script>

<style scoped>
    h2 {
        padding-top: 20px;
    }
    #forecast {
        max-width: 45%;
    }
    #period {
        float: left;
        width: 100%;
        margin-bottom: 5px;
    }
    .clear {
        clear: both;
    }
</style>
