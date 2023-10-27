<template>
    <!-- <div class="clear"> -->

        <div id="clock">
            <!-- <Clock /> -->
            <!-- <StaticTime /> -->
            {{hours}}:{{minutes}} {{ reloadCounter }}
        </div>

        <!-- <div id="content"> -->
            <div id="forecast">
                <Forecast />
            </div>

        <!-- <div id="current"> -->
            <!-- <iframe id="aqi" src="https://widget.airnow.gov/aq-dial-widget/?city=Raleigh&state=NC&country=USA&transparent=true" title="AQI" style="border: none; border-radius: 25px;" height="340" width="230"></iframe> -->

            <div id="aqi">
                <!-- <iframe title="Example 2" height="340" src="https://widget.airnow.gov/aq-dial-widget/?city=Seattle&state=WA&country=USA&transparent=true" style="border: none; border-radius: 25px;" width="230"></iframe> -->
                <AQI />
        </div>

            <!-- <iframe id="calendar" src="https://calendar.google.com/calendar/embed?height=450&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&showTitle=0&showNav=0&showPrint=0&showCalendars=0&showTz=1&mode=AGENDA&src=amVmZmphbWVzQGdtYWlsLmNvbQ&src=MjZ0azZncGc1NDVuNTExbG9mOW03a2tqbTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=dHBiMGowNnNtbTlmOTQ3Z3FydmVkYmM5NmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZWM1NDI5ZDE1NDYzMjg2M2NlZjgxN2UzNjc0OTQwZTIzMDJlNzU1NDEwYzdjMWEwZDQzY2EzNWE0ZjAzZTM1Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NWpqZzIzY21ydDQ5MG01M2ppbzRyb2EyMmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=cGpndjhtMmhtMGpuZDlzYWhlcG9xMjFqMzI5cmVmMzNAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=bnl0aW1lcy5jb21fODlhaTRpanBiNzMzZ3QyOHJnMjFkMmMyZWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%239E69AF&color=%23D50000&color=%234285F4&color=%23A79B8E&color=%23F6BF26&color=%2333B679&color=%23616161&color=%23D50000&color=%233F51B5" frameborder="0" scrolling="no"></iframe> -->
            <iframe id="calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&mode=AGENDA&src=amVmZmphbWVzQGdtYWlsLmNvbQ&src=MjZ0azZncGc1NDVuNTExbG9mOW03a2tqbTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZWM1NDI5ZDE1NDYzMjg2M2NlZjgxN2UzNjc0OTQwZTIzMDJlNzU1NDEwYzdjMWEwZDQzY2EzNWE0ZjAzZTM1Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%239E69AF&color=%23D50000&color=%23A79B8E&color=%2333B679" frameborder="0" scrolling="no"></iframe>
            <iframe id="traffic" src="https://embed.waze.com/iframe?zoom=10&lat=47.45&lon=-122.3&ct=livemap" allowfullscreen></iframe>


        <!-- </div> -->
        <!-- </div> -->
    <!-- </div> -->
</template>

<script>

// import Clock from './Clock.vue'
// import Axios from 'axios'
// import CurrentNOAA from './Weather/CurrentNOAA.vue'
import AQI from './Weather/AQI.vue'
import Forecast from './Weather/Forecast.vue'
// import StaticTime from './StaticTime.vue'

export default {
    name: 'Current',

    components: {
        // Clock,
        // CurrentNOAA,
        AQI,
        Forecast,
        // StaticTime
    },

    methods: {
        // reloadPage (interval) {
        //     setInterval(() => {
        //         location.reload(true)
        //     }, interval)
        // },

        setView(view) {
            switch(view) {
                case 0:
                    document.getElementById("calendar").style.display = "none"
                    document.getElementById("forecast").style.display = "block"
                    break;
                case 1:
                    document.getElementById("forecast").style.display = "none"
                    document.getElementById("aqi").style.display = "block"
                    break;
                case 2:
                    document.getElementById("aqi").style.display = "none"
                    document.getElementById("traffic").style.display = "block"
                    break;
                case 3:
                    document.getElementById("traffic").style.display = "none"
                    document.getElementById("calendar").style.display = "block"
                    break;
                default:
            }
        },

        changeView () {
            setInterval(() => {
                // var aqi = document.getElementById("aqi")
                // if (aqi.style.display === "none") {
                //     aqi.style.display = "block";
                // } else {
                //     aqi.style.display = "none";
                // }
                // StaticTime.setTime()
                this.setTime()
                this.reloadCounter++
                if (this.reloadCounter >= 180) {
                    this.reloadCounter = 0
                    location.reload(true)
                }
                this.view++
                this.view = this.view % 4
                this.setView(this.view)
            }, 20000)
        },
 
        zeroPad (number) {
            return ('0' + number).slice(-2)
        },
 
        setTime () {
            const date = new Date()
            this.hours = date.getHours()
            if (this.hours > 12)
               this.hours = this.hours - 12;
            if (this.hours == 0)
               this.hours = 12;
            this.minutes = this.zeroPad(date.getMinutes())
            },
    },

    data () {
        return {
            noaaData: null,
            currentTemp: null,
            currentWeather: null,
            windSpeed: null,
            windDirection: null,
            periods: null,
            view: 0,
            hours: 0,
            minutes: 0,
            reloadCounter: 0
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
        // this.updateWeather(60000)

        // this.reloadPage(3600000)
        this.setTime()
        document.getElementById("aqi").style.display = "none"
        document.getElementById("traffic").style.display = "none"
        document.getElementById("calendar").style.display = "none"
        document.getElementById("footer").style.display = "none"
        this.changeView()
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
        /* padding-top: 10px; */
        clear: both;
        /* padding-bottom: 20px; */
        margin: auto;
        height: 70px;
        font-size: 48px;
        /* text-align: center; */
    }
    #aqi {
        margin: auto;
        width: 800px;
        height: 450px;
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
    #forecast {
        clear: both;
        float: none;
        margin: auto;
        max-width: 767px;

    }
    #calendar {
        margin: auto;
        border-width: 0;
        width: 800px;
        height: 450px;
    }
    #traffic {
        margin: auto;
        width: 800px;
        height: 450px;
    }
    .clear {
        clear: both;
    }
    .left {
        text-align: left;
    }
    .pad-right {
        margin-right: 10px;
    }
    .spacer {
        clear: both;
        height: 5px;
    }
</style>
