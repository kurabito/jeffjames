<template>
    <div class="clear">
        <h2>Burien Weather</h2>

        <div class="tomorrow"
           data-location-id="318001"
           data-language="EN"
           data-unit-system="IMPERIAL"
           data-skin="light"
           data-widget-type="upcoming"
           style="padding-bottom:22px;position:relative;"
        >
          <a
            href="https://www.tomorrow.io/weather/"
            rel="nofollow noopener noreferrer"
            target="_blank"
            style="position: absolute; bottom: 0; transform: translateX(-50%); left: 50%;"
          >
            <img
              alt="Powered by Tomorrow.io"
              src="https://weather-website-client.tomorrow.io/img/powered-by-tomorrow.svg"
              width="140"
              height="15"
            />
          </a>
        </div>

        <!-- <a class="weatherwidget-io" href="https://forecast7.com/en/47d61n122d33/seattle/?unit=us" data-label_1="SEATTLE"
            data-label_2="WEATHER" data-theme="original"></a> -->

        <iframe title="AQI" height="340" width="230"
            src="https://widget.airnow.gov/aq-dial-widget/?city=Seattle&state=WA&country=USA&transparent=true"
            style="border: none; border-radius: 25px;">
        </iframe>
    </div>
</template>

<script>

// WeatherWidget.io

    // !function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'weatherwidget-io-js');

    // function displayForecast1(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js'; fjs.parentNode.insertBefore(js, fjs); } }

function displayForecast2 (d, s, id) {
    console.log("In displayForecast2");
    if (d.getElementById(id)) {
        if (window.__TOMORROW__) {
            window.__TOMORROW__.renderWidget();
        }
        return;
    }
    const fjs = d.getElementsByTagName(s)[0];
    const js = d.createElement(s);
    js.id = id;
    js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

    fjs.parentNode.insertBefore(js, fjs);
}

// displayForecast2(document, 'script', 'tomorrow-sdk')

export default {
    name: 'Weather',

    mounted() {
        displayForecast2(document, 'script', 'tomorrow-sdk')
    },

    // updated() {
    //     displayForecast2(document, 'script', 'tomorrow-sdk')
    // },
}

</script>

<style>
.clear {
    clear: both;
}
</style>
