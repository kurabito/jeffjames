<template>
    <div id="clock">
        {{hours}}:{{minutes}}
    </div>

    <div id="forecast">
        <Forecast />
    </div>

    <div id="aqi">
        <AQI />
    </div>

    <iframe id="calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&mode=AGENDA&src=amVmZmphbWVzQGdtYWlsLmNvbQ&src=MjZ0azZncGc1NDVuNTExbG9mOW03a2tqbTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZWM1NDI5ZDE1NDYzMjg2M2NlZjgxN2UzNjc0OTQwZTIzMDJlNzU1NDEwYzdjMWEwZDQzY2EzNWE0ZjAzZTM1Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%239E69AF&color=%23D50000&color=%23A79B8E&color=%2333B679" frameborder="0" scrolling="no"></iframe>

    <iframe id="traffic" src="https://embed.waze.com/iframe?zoom=10&lat=47.45&lon=-122.3&ct=livemap" allowfullscreen></iframe>
</template>

<script>
import AQI from './Weather/AQI.vue'
import Forecast from './Weather/Forecast.vue'

export default {
    name: 'Current',

    components: {
        AQI,
        Forecast
    },

    methods: {
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

        setView(view) {
            switch(view) {
                case 0:
                    location.reload(true)
                    break;
                case 1:
                    document.getElementById("aqi").style.display = "none"
                    document.getElementById("traffic").style.display = "block"
                    break;
                case 2:
                    document.getElementById("traffic").style.display = "none"
                    document.getElementById("calendar").style.display = "block"
                    break;
                case 3:
                    document.getElementById("calendar").style.display = "none"
                    document.getElementById("forecast").style.display = "block"
                    break;
                default:
            }
        },

        changeView () {
            setInterval(() => {
                this.setTime()
                this.view++
                this.view = this.view % 4
                this.setView(this.view)
            }, 20000)
        },
    },

    data () {
        return {
            view: 0,
            hours: 0,
            minutes: 0,
        }
    },

    mounted() {
        this.setTime()
        // document.getElementById("forecast").style.display = "none"
        // document.getElementById("traffic").style.display = "none"
        // document.getElementById("calendar").style.display = "none"
        document.getElementById("footer").style.display = "none"
        this.changeView()
    },
}
</script>

<style scoped>
    #clock {
        clear: both;
        margin: auto;
        height: 70px;
        font-size: 48px;
    }
    #aqi {
        margin: auto;
        width: 800px;
        height: 450px;
    }
    /* #current {
        width: max-content;
        margin: auto;
    } */
    #forecast {
        clear: both;
        float: none;
        margin: auto;
        max-width: 767px;
        display: none;
    }
    #calendar {
        margin: auto;
        border-width: 0;
        width: 800px;
        height: 450px;
        display: none;
    }
    #traffic {
        margin: auto;
        width: 800px;
        height: 450px;
        display: none;
    }
</style>