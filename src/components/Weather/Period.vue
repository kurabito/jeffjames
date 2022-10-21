<template>
    <div class="period">
        <img :src=imageUrl />
        <!-- <div id="periodText"> -->
            <div class="periodTitle">
                {{ name }}
            </div>
            {{ forecastText }}
        <!-- </div> -->
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
    .period {
        float: left;
        /* max-width: 600px; */
        width: 100%;
        margin: auto;
        margin-bottom: 5px;
    }
    /* .periodText {
        float: none;
        width: 60%;
        margin: auto
    } */
    .periodTitle {
        width: 100%;
        font-weight: bold;
    }
</style>