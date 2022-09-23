<template>
    <div id="period">
        <img :src=imageUrl />
        <div id="periodText">
            <div id="periodTitle">
                {{ name }}
            </div>
            {{ forecastText }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Period',
    props: {
        name: String,
        imageUrl: String,
        forecastText: String
    }
}
</script>
<style scoped>
    img {
        float: left
    }
    #period {
        float: left;
    }
    #periodText {
        float: none;
        width: 60%;
        margin: auto
    }
    #periodTitle {
        font-weight: bold;
    }
</style>