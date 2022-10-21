<template>
    <div class="period">
        <img :src=imageUrl />
        <div class="periodTitle">
            {{ name }}
        </div>
        {{ forecastText }}
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
        width: 100%;
        margin: auto;
        margin-bottom: 5px;
    }
    .periodTitle {
        width: 100%;
        font-weight: bold;
    }
</style>